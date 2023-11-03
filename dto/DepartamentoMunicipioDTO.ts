import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class DepartamentoMunicipioDTO{
    
    @Expose ({name: 'depatamentoMunicipioFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El depatamentoMunicipioFk incumple los parametros acordados`};}, {toClassOnly:true})
    depatamentoMunicipioFk: number;

    @Expose ({name: 'municipioDepartamentoFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El municipioDepartamentoFk incumple los parametros acordados`};}, {toClassOnly:true})
    municipioDepartamentoFk: number;


    constructor (depatamentoMunicipioFk:number, municipioDepartamentoFk: number){
        this.depatamentoMunicipioFk = depatamentoMunicipioFk;
        this.municipioDepartamentoFk =municipioDepartamentoFk;
    }
}