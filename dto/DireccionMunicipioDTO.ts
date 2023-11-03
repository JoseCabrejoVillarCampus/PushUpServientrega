import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class DireccionMunicipioDTO{
    
    @Expose ({name: 'direccionMunicipioFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El clienteDireccionFk incumple los parametros acordados`};}, {toClassOnly:true})
    direccionMunicipioFk: number;

    @Expose ({name: 'MunicipiodireccionFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El direccionClienteFk incumple los parametros acordados`};}, {toClassOnly:true})
    MunicipiodireccionFk: number;


    constructor (direccionMunicipioFk:number, MunicipiodireccionFk: number){
        this.direccionMunicipioFk = direccionMunicipioFk;
        this.MunicipiodireccionFk =MunicipiodireccionFk;
    }
}