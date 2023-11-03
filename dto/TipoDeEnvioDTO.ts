import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class TipoDeEnvioDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'nombre'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato via incumple los parametros acordados`};}, {toClassOnly:true})
    nombre: string;
    
    @Expose ({name: 'horarioFuncionamineto'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato horarioFuncionamineto incumple los parametros acordados`};}, {toClassOnly:true})
    horarioFuncionamineto: string;

    @Expose ({name: 'tiempoEstimadoEntrega'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato tiempoEstimadoEntrega incumple los parametros acordados`};}, {toClassOnly:true})
    tiempoEstimadoEntrega: string;
    
    constructor (id:number,nombre:string, horarioFuncionamineto: string, tiempoEstimadoEntrega: string){
        this.id = id;
        this.nombre = nombre;
        this.horarioFuncionamineto =horarioFuncionamineto;
        this.tiempoEstimadoEntrega =tiempoEstimadoEntrega;
    }
}