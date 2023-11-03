import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class EmpleadoDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'nombreCompleto'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato nombreCompleto incumple los parametros acordados`};}, {toClassOnly:true})
    nombreCompleto: string;
    
    @Expose ({name: 'documentoEmpleadoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El documentoEmpleadoFk incumple los parametros acordados`};}, {toClassOnly:true})
    documentoEmpleadoFk: number;

    @Expose ({name: 'direccionEmpleadoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El direccionEmpleadoFk incumple los parametros acordados`};}, {toClassOnly:true})
    direccionEmpleadoFk: number;

    @Expose ({name: 'telefonoEmpleadoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El telefonoEmpleadoFk incumple los parametros acordados`};}, {toClassOnly:true})
    telefonoEmpleadoFk: number;

    @Expose ({name: 'emailEmpleadoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El emailEmpleadoFk incumple los parametros acordados`};}, {toClassOnly:true})
    emailEmpleadoFk: number;

    @Expose ({name: 'SucursalEmpleadoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El SucursalEmpleadoFk incumple los parametros acordados`};}, {toClassOnly:true})
    SucursalEmpleadoFk: number;

    constructor (id:number,nombreCompleto:string, documentoEmpleadoFk: number, direccionEmpleadoFk: number, telefonoEmpleadoFk: number, emailEmpleadoFk: number, SucursalEmpleadoFk: number){
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.documentoEmpleadoFk =documentoEmpleadoFk;
        this.direccionEmpleadoFk =direccionEmpleadoFk;
        this.telefonoEmpleadoFk =telefonoEmpleadoFk;
        this.emailEmpleadoFk =emailEmpleadoFk;
        this.SucursalEmpleadoFk =SucursalEmpleadoFk;
    }
}