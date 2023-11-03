import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import appPais from './routes/PaisRoutes.js';
import appTipoDocumento from './routes/TipoDocumentoRoutes.js';
import appDocumento from './routes/DocumentoRoutes.js';
import appEmail from './routes/EmailRoutes.js';
import appCliente from './routes/ClienteRoutes.js';
import appDireccion from './routes/DireccionRoutes.js';
import appClienteDireccion from './routes/ClienteDireccionRoutes.js';
import appDireccionMunicipio from './routes/DireccionMunicipioRoutes.js';
import appMunicipio from './routes/MunicipioRoutes.js';
import appDepartamentoMunicipio from './routes/ClienteDireccionRoutes.js';
import appEmpleado from './routes/EmpleadoRoutes.js';
import appDepartamento from './routes/DepartamentoRoutes.js';
import appSucursal from './routes/SucursalRoutes.js';
import appIndicativoTelefono from './routes/IndicativoTelefonoRoutes.js';
import appTelefono from './routes/TelefonoRoutes.js';
import appOrdenEnvio from './routes/OrdenEnvio.js';
import appTipoDeSeguro from './routes/TipoDeSeguroRoutes.js';
import appTipoDeRuta from './routes/TipoDeRutasRoutes.js';
import appTipoDeEnvio from './routes/TipoDeEnvioRoutes.js';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use(cookieParser());
appExpress.use("/paises", appPais);
appExpress.use("/tipo_de_documentos", appTipoDocumento);
appExpress.use("/documentos", appDocumento);
appExpress.use("/emails", appEmail);
appExpress.use("/clientes", appCliente);
appExpress.use("/direcciones", appDireccion);
appExpress.use("/direccionCliente", appClienteDireccion);
appExpress.use("/direccionMunicipio", appDireccionMunicipio);
appExpress.use("/municipios", appMunicipio);
appExpress.use("/departamentoMunicipios", appDepartamentoMunicipio);
appExpress.use("/empleados", appEmpleado);
appExpress.use("/departamento", appDepartamento);
appExpress.use("/sucursal", appSucursal);
appExpress.use("/indicativo", appIndicativoTelefono);
appExpress.use("/telefonos", appTelefono);
appExpress.use("/ordenesenvio", appOrdenEnvio);
appExpress.use("/tiposeguro", appTipoDeSeguro);
appExpress.use("/tiporuta", appTipoDeRuta);
appExpress.use("/tipoenvio", appTipoDeEnvio);


const config = JSON.parse(process.env.MY_CONGIG);
appExpress.listen(config,
    ()=>console.log(`http://${config.hostname}:${config.port}`));