import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class OrdenDeEnvioDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'codigoEnvio'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El codigoEnvio incumple los parametros acordados`};}, {toClassOnly:true})
    codigoEnvio: number;

    @Expose ({name: 'idClienteFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idClienteFk incumple los parametros acordados`};}, {toClassOnly:true})
    idClienteFk: number;

    @Expose ({name: 'SucursalOrigenFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El SucursalOrigenFk incumple los parametros acordados`};}, {toClassOnly:true})
    SucursalOrigenFk: number;

    @Expose ({name: 'idEmpleadoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idEmpleadoFk incumple los parametros acordados`};}, {toClassOnly:true})
    idEmpleadoFk: number;

    @Expose ({name: 'idDireccionEntregaFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idDireccionEntregaFk incumple los parametros acordados`};}, {toClassOnly:true})
    idDireccionEntregaFk: number;

    @Expose ({name: 'fechaDeEnvio'})
    @IsDefined()
    fechaDeEnvio: Date;

    @Expose ({name: 'fechaDeEntrega'})
    @IsDefined()
    fechaDeEntrega: Date;

    @Expose ({name: 'pesoPaquete'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El pesoPaquete incumple los parametros acordados`};}, {toClassOnly:true})
    pesoPaquete: number;

    @Expose ({name: 'idTipoSeguroFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idTipoSeguroFk incumple los parametros acordados`};}, {toClassOnly:true})
    idTipoSeguroFk: number;

    @Expose ({name: 'idTipoDeRutaFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idTipoDeRutaFk incumple los parametros acordados`};}, {toClassOnly:true})
    idTipoDeRutaFk: number;

    @Expose ({name: 'idTipoDeEnvioFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idTipoDeEnvioFk incumple los parametros acordados`};}, {toClassOnly:true})
    idTipoDeEnvioFk: number;

    constructor (id:number,codigoEnvio:number,idClienteFk:number,SucursalOrigenFk:number,idEmpleadoFk:number,idDireccionEntregaFk:number,fechaDeEnvio:Date,fechaDeEntrega:Date,pesoPaquete:number,idTipoSeguroFk:number,idTipoDeRutaFk:number,idTipoDeEnvioFk:number){
        this.id = id;
        this.codigoEnvio = codigoEnvio;
        this.idClienteFk =idClienteFk;
        this.SucursalOrigenFk =SucursalOrigenFk;
        this.idEmpleadoFk =idEmpleadoFk;
        this.idDireccionEntregaFk =idDireccionEntregaFk;
        this.fechaDeEnvio = fechaDeEnvio;
        this.fechaDeEntrega = fechaDeEntrega;
        this.pesoPaquete =pesoPaquete;
        this.idTipoSeguroFk =idTipoSeguroFk;
        this.idTipoDeRutaFk =idTipoDeRutaFk;
        this.idTipoDeEnvioFk =idTipoDeEnvioFk;
    }
}