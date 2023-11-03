import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class ClienteDireccionDTO{
    
    @Expose ({name: 'clienteDireccionFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El clienteDireccionFk incumple los parametros acordados`};}, {toClassOnly:true})
    clienteDireccionFk: number;

    @Expose ({name: 'direccionClienteFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El direccionClienteFk incumple los parametros acordados`};}, {toClassOnly:true})
    direccionClienteFk: number;


    constructor (clienteDireccionFk:number, direccionClienteFk: number){
        this.clienteDireccionFk = clienteDireccionFk;
        this.direccionClienteFk =direccionClienteFk;
    }
}