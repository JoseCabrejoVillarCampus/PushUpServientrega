import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class TipoDeRutaDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'nombre'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato via incumple los parametros acordados`};}, {toClassOnly:true})
    nombre: string;
    
    @Expose ({name: 'via'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato nombreCompleto incumple los parametros acordados`};}, {toClassOnly:true})
    via: string;

    @Expose ({name: 'descripcion'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato descripcion incumple los parametros acordados`};}, {toClassOnly:true})
    descripcion: string;
    
    constructor (id:number,nombre:string, via: string, descripcion: string){
        this.id = id;
        this.nombre = nombre;
        this.via =via;
        this.descripcion =descripcion;
    }
}