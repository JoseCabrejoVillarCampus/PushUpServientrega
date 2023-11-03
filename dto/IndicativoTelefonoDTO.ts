import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class IndicativoTelefonoDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Proveedor incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'idPaisFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El idPaisFk incumple los parametros acordados`};}, {toClassOnly:true})
    idPaisFk: number;

    @Expose ({name: 'indicativo'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato indicativo incumple los parametros acordados`};}, {toClassOnly:true})
    indicativo: string;
    
    constructor (id:number,idPaisFk:number,indicativo:string){
        this.id = id;
        this.idPaisFk = idPaisFk;
        this.indicativo = indicativo;
    }
}