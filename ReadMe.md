CREATE DATABASE servientregadb;

USE servientrega;



CREATE TABLE Pais(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR(80), 
PRIMARY KEY (id)
);

CREATE TABLE Departamento(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR(80), 
idPaisFk INT,
PRIMARY KEY (id), 
FOREIGN KEY (idPaisFk) FROM Pais(id),
);

CREATE TABLE Municipio(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR(80), 
idDepartamentoFk INT,
PRIMARY KEY (id),
FOREIGN KEY (idDepartamentoFk) FROM Departamento(id)
);



CREATE TABLE IndicativoTelefono (
id INT NOT NULL AUTH_INCREMENT,  
IdPaisFk INT, 
indicativo VARCHAR(80),
FOREIGN KEY (IdPaisFk) FROM Pais(id)
);

CREATE TABLE Telefono (
id INT NOT NULL AUTH_INCREMENT,  
IdIndicativoPaisFk INT, 
numero INT,
FOREIGN KEY (IdIndicativoPaisFk) FROM IndicativoPais(id)
);

CREATE TABLE Email(
id INT NOT NULL AUTH_INCREMENT, 
email VARCHAR(80), 
PRIMARY KEY (id)
);

CREATE TABLE TipoDeDocumento(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR(80), 
PRIMARY KEY (id)
);

CREATE TABLE Documento(
id INT NOT NULL AUTH_INCREMENT, 
idTipoDocumentoFk INT, 
numeroDocumento VARCHAR,
PRIMARY KEY (id),
FOREIGN KEY (idTipoDocumentoFk)FROM Documento(id)
);

CREATE TABLE Cliente(
id INT NOT NULL AUTH_INCREMENT, 
nombreCompleto VARCHAR,
IdDocumentoFk INT, 
IdDireccionFk INT, 
IdTelefonoFk INT, 
idEmailFk INT,
PRIMARY KEY (id),
FOREIGN KEY (IdDocumentoFk) FROM Documento(id),
FOREIGN KEY (IdDireccionFk) FROM Direccion(id),
FOREIGN KEY (IdTelefonoFk) FROM Telefono(id),
FOREIGN KEY (idEmailFk) FROM Email(id)
);

CREATE TABLE Cliente_Direccion(
clienteDireccionFk INT, 
direccionclienteFk INT, 
FOREIGN KEY (clienteDireccionFk) FROM Cliente(id),
FOREIGN KEY (direccionclienteFk) FROM Direccion(id)
);

CREATE TABLE Direccion(
id INT NOT NULL AUTH_INCREMENT, 
IdMunicipioFk INT, 
nomenclatura VARCHAR, 
referencia TEXT, 
PRIMARY KEY (id),
FOREIGN KEY (IdMunicipioFk) FROM Municipio(id)
);

CREATE TABLE Direccion_Municipio(
direccioMunicipioFk INT, 
MunicipioDireccionFk INT, 
FOREIGN KEY (direccioMunicipioFk) FROM Direccion(id),
FOREIGN KEY (MunicipioDireccionFk) FROM Municipio(id)
);

CREATE TABLE Municipio(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR, 
IdDepartamentoFk INT, , 
PRIMARY KEY (id),
FOREIGN KEY (IdDepartamentoFk) FROM Departamento(id)
);

CREATE TABLE Departamento_Municipio(
departamentoMunicipioFk INT, 
municipoDepartamentoFk INT, 
FOREIGN KEY (departamentoMunicipioFk) FROM Departamento(id),
FOREIGN KEY (municipoDepartamentoFk) FROM Municipio(id)
);

CREATE TABLE Cliente(
id INT NOT NULL AUTH_INCREMENT, 
nombreCompleto VARCHAR, 
IdDocumentoFk INT, 
IdDireccionFk INT, 
IdTelefonoFk INT, 
idEmailFk INT, 
PRIMARY KEY (id),
FOREIGN KEY (IdDocumentoFk) FROM Documento(id), 
FOREIGN KEY (IdDireccionFk) FROM Direccion(id), 
FOREIGN KEY (IdTelefonoFk) FROM Telefono(id), 
FOREIGN KEY (idEmailFk) FROM Email(id)
);

CREATE TABLE Empleado(
id INT NOT NULL AUTH_INCREMENT, 
nombreCompleto VARCHAR, 
documentoEmpleadoFk INT, 
direccionEmpleadoFk INT, 
telefonoEmpleadoFk INT, 
emailEmpleadoFk INT, 
SucursalEmpleadoFk INT,
PRIMARY KEY (id),
FOREIGN KEY (documentoEmpleadoFk) FROM Documento(id), 
FOREIGN KEY (direccionEmpleadoFk) FROM Direccion(id), 
FOREIGN KEY (telefonoEmpleadoFk) FROM Telefono(id), 
FOREIGN KEY (emailEmpleadoFk) FROM Email(id), 
FOREIGN KEY (SucursalEmpleadoFk) FROM Sucursal(id)
);

CREATE TABLE TipoDeSeguro(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR, 
costo INT, 
descripcion VARCHAR, 
PRIMARY KEY (id));

CREATE TABLE TipoDeRuta(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR, 
via VARCHAR, 
descripcion VARCHAR, 
PRIMARY KEY (id));

CREATE TABLE TipoDeEnvio(
id INT NOT NULL AUTH_INCREMENT, 
nombre VARCHAR, 
horarioFuncionamiento VARCHAR, 
TiempoEstimadoEntrega VARCHAR, 
PRIMARY KEY (id));

CREATE TABLE OrdenDeEnvio(
id INT NOT NULL AUTH_INCREMENT, 
codigoEnvio INT,
idClienteFk INT, 
SucursalOrigenFk INT, 
idDireccionEntregaFk INT, 
idEmpleadoFk INT, 
fechaDeEnvio DATE, 
fechaDeEntrega DATE,
pesoPaquete INT, 
idTipoSeguroFk INT, 
idTipoDeRutaFk INT, 
idTipoDeEnvioFk INT,
PRIMARY KEY (id),
FOREIGN KEY (idClienteFk) FROM Cliente(id), 
FOREIGN KEY (SucursalOrigenFk) FROM Sucursal(id), 
FOREIGN KEY (idDireccionEntregaFk) FROM Direccion(id), 
FOREIGN KEY (idEmpleadoFk) FROM Empleado(id), 
FOREIGN KEY (idTipoSeguroFk) FROM TipoDeSeguro(id), 
FOREIGN KEY (idTipoDeRutaFk) FROM TipoDeRuta(id), 
FOREIGN KEY (idTipoDeEnvioFk) FROM TipoDeEnvio(id)
);
