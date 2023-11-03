import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString, IsDate} from 'class-validator';
export class DireccionDTO{
    @Expose ({name: 'id'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El Documento incumple los parametros acordados`};}, {toClassOnly:true})
    id: number;

    @Expose ({name: 'idMunicipioFk'})
    @IsNumber()
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)||value ==undefined) return Math.floor(value); else throw {status:400, message: `El ididMunicipioFkFk incumple los parametros acordados`};}, {toClassOnly:true})
    idMunicipioFk: number;

    @Expose ({name: 'nomenclatura'})
    @IsString()
    @Transform(({value})=>{if(/^[a-z A-Z áéíóúÁÉÍÓÚñÑ 0-9]+$/.test(value)) return value; else throw {status:400, message: `El dato nomenclatura incumple los parametros acordados`};}, {toClassOnly:true})
    nomenclatura: string;

    @Expose ({name: 'referencia'})
    @IsDefined()
    referencia: Text;
    
    constructor (id:number,idMunicipioFk:number,nomenclatura:string, referencia:Text){
        this.id = id;
        this.idMunicipioFk = idMunicipioFk;
        this.nomenclatura = nomenclatura;
        this.referencia = referencia;
    }
}