import expressQueryBoolean from "express-query-boolean";
import session from "express-session";
import mysql from "mysql2";
import { Router } from "express";
import { SignJWT, jwtVerify } from "jose";
import proxyEmail from "../middleware/EmailMiddleware.js";

const appEmail = Router();
let con = undefined;

appEmail.use("/:id?", async(req, res, next)=>{
    try {
        const encoder = new TextEncoder();
        const playload = { body: req.body, params: req.params, id: req.params.id};
        const jwtconstructor = new SignJWT(playload);
        const jwt = await jwtconstructor
            .setProtectedHeader({alg:"HS256", typ:"JWT"})
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.body = playload.body;
        req.session.jwt = jwt;
        const maxAgeInSeconds = 3600;
        res.cookie('token',jwt, {
            httpOnly: true, maxAge:maxAgeInSeconds * 1000
        });
        next();
    } catch (err) {
        console.error('Error al generar el JWT: ', err.message);
        res.sendStatus(500);
    }
});

appEmail.use((req, res, next)=>{
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
});

appEmail.use(expressQueryBoolean());
const getEmailById = (id)=>{
    return new Promise((resolve, reject)=>{
        const sql = [`SELECT * FROM TipoDeEmail WHERE id = ?`, id];
        con.query(...sql, (err, data)=>{
            if(err){
                reject(err);
            } else {
                resolve (data);
            }
        })
    })
};
appEmail.get("/:id?", proxyEmail, async(req, res)=>{
    try {
        const {id} = req.query;
        if (id){
            const data= await getEmailById(id);
            res.send(data);
        } else {
            const sql = [`SELECT * FROM TipoDeEmail`];
            con.query(...sql,(err, data)=>{
                if (err){
                    console.error("Ocurrio un error intentando traer los datos de Email", err.message);
                    res.status(err.status || 500);
                } else {
                    res.send(data);
                }
            })
        }
    } catch (err) {
        console.error("Ocurrio un error al procesar la solicitud", err.message);
        res.sendStatus(500);
    }
});

appEmail.post("/", proxyEmail, async (req, res)=>{
    con.query(
        /*sql*/
        `INSERT INTO TipoDeEmail SET = ?`,
        await getBody(req),
        (err, result)=>{
            if (err){
                console.error('Error al crear Email: ', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
        )
});

appEmail.put("/:id", proxyEmail, async (req,res)=>{
    const jwt = req.session.jwt;
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
        jwt, encoder.encode(process.env.JWT_PRIVATE_KEY)
    )
    con.query(`UPDATE TipoDeEmail SET ? WHERE id = ?`), [jwtData.payload.body, jwtData.payload.params.id],
        (err, result)=>{
            if(err){
                console.error('Error al actualizar Email: ', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
});

appEmail.delete("/:id", async (req, res)=>{
    const jwt = req.session.jwt;
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
        jwt, encoder.encode(process.env.JWT_PRIVATE_KEY)
    )
    con.query(`DELETE FROM TipoDeEmail WHERE id = ?`,jwtData.payload.paramas.id,
        (err, info)=>{
            if(err){
                console.error(`Error al eliminar Email ${req.params.id}: `, err.message);
                res.status(err.status);
            } else {
                res.send(info);
            }
        })
});

const getBody = async (req)=>{
    const jwt = req.session.jwt;
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
        jwt, encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    delete jwtData.payload.iat,
    delete jwtData.payload.exp;
    return jwtData.payload.body
}

export default appEmail;