import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class ClienteDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'nombreCompleto'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato nombreCompleto incumple los parametros acordados`};}, {toClassOnly:true})
    nombreCompleto: string;
    
    @Expose ({name: 'idDocumentoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idDocumentoFk incumple los parametros acordados`};}, {toClassOnly:true})
    idDocumentoFk: number;

    @Expose ({name: 'idDireccionFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idDireccionFk incumple los parametros acordados`};}, {toClassOnly:true})
    idDireccionFk: number;

    @Expose ({name: 'idTelefonoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idTelefonoFk incumple los parametros acordados`};}, {toClassOnly:true})
    idTelefonoFk: number;

    @Expose ({name: 'idEmailFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idEmailFk incumple los parametros acordados`};}, {toClassOnly:true})
    idEmailFk: number;

    constructor (id:number,nombreCompleto:string, idDocumentoFk: number, idDireccionFk: number, idTelefonoFk: number, idEmailFk: number){
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.idDocumentoFk =idDocumentoFk;
        this.idDireccionFk =idDireccionFk;
        this.idTelefonoFk =idTelefonoFk;
        this.idEmailFk =idEmailFk;
    }
}