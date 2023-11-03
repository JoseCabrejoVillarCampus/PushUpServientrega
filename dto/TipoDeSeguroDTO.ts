import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class TipoDeSeguroDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'nombre'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato nombreCompleto incumple los parametros acordados`};}, {toClassOnly:true})
    nombre: string;
    
    @Expose ({name: 'costo'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El costo incumple los parametros acordados`};}, {toClassOnly:true})
    costo: number;

    @Expose ({name: 'descripcion'})
    @IsDefined()
    descripcion: Text;
    
    constructor (id:number,nombre:string, costo: number, descripcion: Text){
        this.id = id;
        this.nombre = nombre;
        this.costo =costo;
        this.descripcion =descripcion;
    }
}