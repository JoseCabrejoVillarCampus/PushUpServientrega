import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class TelefonoDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Proveedor incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'indicativoPaisFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El indicativoPaisFk incumple los parametros acordados`};}, {toClassOnly:true})
    indicativoPaisFk: number;

    @Expose ({name: 'numero'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El numero incumple los parametros acordados`};}, {toClassOnly:true})
    numero: string;
    
    constructor (id:number,indicativoPaisFk:number,numero:string){
        this.id = id;
        this.indicativoPaisFk = indicativoPaisFk;
        this.numero = numero;
    }
}