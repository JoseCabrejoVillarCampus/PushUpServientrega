import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class DocumentoDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'idTipoDocumentoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idTipoDocumentoFk incumple los parametros acordados`};}, {toClassOnly:true})
    idTipoDocumentoFk: number;

    @Expose ({name: 'numeroDocumento'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato numeroDocumento incumple los parametros acordados`};}, {toClassOnly:true})
    numeroDocumento: string;
    
    constructor (id:number,idTipoDocumentoFk:number,numeroDocumento:string){
        this.id = id;
        this.idTipoDocumentoFk = idTipoDocumentoFk;
        this.numeroDocumento = numeroDocumento;
    }
}