CREATE DATABASE SolucionesServientrega;

USE SolucionesServientrega;

CREATE TABLE Email(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL,
    PRIMARY KEY (id));


CREATE TABLE Pais(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL,
    PRIMARY KEY (id));

CREATE TABLE Departamento(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL, 
	idPaisFk INT (11), 
	PRIMARY KEY (id),
    FOREIGN KEY (idPaisFk) REFERENCES Pais(id));

CREATE TABLE Municipio(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL, 
	idDepartamentoFk INT (11), 
	PRIMARY KEY (id),
    FOREIGN KEY (idDepartamentoFk) REFERENCES Departamento(id));

CREATE TABLE Direccion(
    id INT(11) NOT NULL AUTO_INCREMENT,
    idMunicipioFk INT (11), 
    nomenclatura VARCHAR (50) NOT NULL, 
	referencia TEXT,
	PRIMARY KEY (id),
    FOREIGN KEY (idMunicipioFk) REFERENCES Municipio(id));

CREATE TABLE TipoDocumento(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL, 
    PRIMARY KEY (id));

CREATE TABLE Documento(
    id INT(11) NOT NULL AUTO_INCREMENT,
    idTipoDocumentoFk INT (11), 
    numeroDocumento VARCHAR (50) NOT NULL, 
	PRIMARY KEY (id),
    FOREIGN KEY (idTipoDocumentoFk) REFERENCES TipoDocumento(id));

CREATE TABLE TipoDeSeguro(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL,
    costo DOUBLE,
    descripcion TEXT  NOT NULL, 
    PRIMARY KEY (id));

CREATE TABLE TipoDeRuta(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL,
    via VARCHAR (50) NOT NULL,
    descripcion VARCHAR (50) NOT NULL,
    PRIMARY KEY (id));

CREATE TABLE TipoDeEnvio(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL,
    horarioFuncionamineto VARCHAR (50) NOT NULL,
    tiempoEstimadoEntrega VARCHAR (50) NOT NULL,
    PRIMARY KEY (id));

CREATE TABLE IndicativoTelefono(
    id INT(11) NOT NULL AUTO_INCREMENT,
    idPaisFk INT (11), 
    numero VARCHAR (50) NOT NULL, 
	PRIMARY KEY (id),
    FOREIGN KEY (idPaisFk) REFERENCES Pais(id));

CREATE TABLE Telefono(
    id INT(11) NOT NULL AUTO_INCREMENT,
    indicativo VARCHAR (50) NOT NULL, 
    indicativoPaisFk INT (11), 
	PRIMARY KEY (id),
    FOREIGN KEY (idPaisFk) REFERENCES Pais(id));

CREATE TABLE Sucursal(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL, 
    idDireccionFk INT (11), 
	PRIMARY KEY (id),
    FOREIGN KEY (idDireccionFk) REFERENCES Direccion(id));


CREATE TABLE Empleado(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombreCompleto VARCHAR (50) NOT NULL, 
	documentoEmpleadoFk INT (11), 
    direccionEmpleadoFk INT (11),
    telefonoEmpleadoFk INT (11),
    emailEmpleadoFk INT (11),
    SucursalEmpleadoFk INT (11),
	FOREIGN KEY (documentoEmpleadoFk) REFERENCES Documento(id),
	FOREIGN KEY (direccionEmpleadoFk) REFERENCES Direccion(id),
    FOREIGN KEY (telefonoEmpleadoFk) REFERENCES Telefono(id),
	FOREIGN KEY (emailEmpleadoFk) REFERENCES Email(id),
    FOREIGN KEY (SucursalEmpleadoFk) REFERENCES Sucursal(id),
    PRIMARY KEY (id));

CREATE TABLE Cliente(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombreCompleto VARCHAR (50) NOT NULL,  
	idDocumentoFk INT (11),
    idDireccionFk INT (11),
    idTelefonoFk INT (11),
    idEmailFk INT (11),
	FOREIGN KEY (idDocumentoFk) REFERENCES Documento(id),
	FOREIGN KEY (idDireccionFk) REFERENCES Direccion(id),
    FOREIGN KEY (idTelefonoFk) REFERENCES Telefono(id),
	FOREIGN KEY (idEmailFk) REFERENCES Email(id),
    PRIMARY KEY (id));

CREATE TABLE Orden(
    id INT(11) NOT NULL AUTO_INCREMENT,
    codigoEnvio INT(11) NOT NULL,
	idClienteFk INT (11), 
	SucursalOrigenFk INT (11), 
	idEmpleadoFk INT (11),
    idDireccionEntregaFk INT (11),
    fechaDeEnvio DATE,
    fechaDeEntrega DATE,
    pesoPaquete DOUBLE,
    idTipoSeguroFk INT (11), 
	idTipoDeRutaFk INT (11),
    idTipoDeEnvioFk INT (11),
	FOREIGN KEY (idClienteFk) REFERENCES Cliente(id), 
	FOREIGN KEY (SucursalOrigenFk) REFERENCES Sucursal(id), 
	FOREIGN KEY (idEmpleadoFk) REFERENCES Empleado(id),
    FOREIGN KEY (idDireccionEntregaFk) REFERENCES Direccion(id), 
	FOREIGN KEY (idTipoSeguroFk) REFERENCES TipoDeSeguro(id), 
	FOREIGN KEY (idTipoDeRutaFk) REFERENCES TipoDeRuta(id),
    FOREIGN KEY (idTipoDeEnvioFk) REFERENCES TipoDeEnvio(id),
	PRIMARY KEY (id));


CREATE TABLE ClienteDireccion(
    clienteDireccionFk INT(11) ,
    direccionClienteFk INT(11) , 
	FOREIGN KEY (clienteDireccionFk) REFERENCES Cliente(id),
	FOREIGN KEY (direccionClienteFk ) REFERENCES Direccion(id));

CREATE TABLE DepartamentoMunicipio(
    depatamentoMunicipioFk INT(11) ,
    municipioDepartamentoFk INT(11) , 
	FOREIGN KEY (depatamentoMunicipioFk) REFERENCES Departamento(id),
	FOREIGN KEY (municipioDepartamentoFk ) REFERENCES Municipio(id));

CREATE TABLE DirecionMunicipio(
    direccionMunicipioFk INT(11) ,
    MunicipiodireccionFk INT(11) , 
	FOREIGN KEY (direccionMunicipioFk) REFERENCES Direccion(id),
	FOREIGN KEY (MunicipiodireccionFk ) REFERENCES Municipio(id));