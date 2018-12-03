import { gql } from "apollo-server";
const typegql = gql`
scalar Date
type Empleado {
	uuid: ID!
	nombre: String!
	apellido: String!
	email: String!
	direccion: String!
	fech_nac: Date!
	estatus: Boolean!
	habilidades: String!
	habilidades_desc: String!
	createAt: Date!
	updateAt: Date!
}
type EmpleadoD {
	puntaje: Int!
	uuid: ID!
	nombre: String!
	apellido: String!
	email: String!
	direccion: String!
	fech_nac: Date!
	estatus: Boolean!
	habilidades: String!
	habilidades_desc: String!
	createAt: Date!
	updateAt: Date!
}

type Huellas {
  	huella: String!
	uuid: ID!
	createAt: String!
	updateAt: String!
	EmpleadoUuid: String!
}

type Query {
 hello: String!,
 soluc_candidato(preg: String!): [EmpleadoD!]
}

type Mutation {
  Formulario (
	nombre: String!,
	apellido: String!,
	email: String!,
	direccion: String!,
	fech_nac: String!,
	estatus: Boolean!,
	habilidades: String!,
	habilidades_desc: String!,
	  ): Empleado!
}

`;
export default typegql;
