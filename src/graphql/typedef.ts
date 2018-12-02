import { gql } from "apollo-server";
const typegql = gql`

type Empleado {
  id_empleado: String!
  nombre: String!
  apellido: String!
  email: String!
  direccion: String!
  fech_nac: String!
  estatus: Boolean!
}

type Huellas {
  dedo: String!
  id_empleado: String!
}

type Habilidades {
  Habilidades: String!
  IdHabilidades: Int!
  datosHabilidades: Int!
}

type Formulario {
  apellido: String!
  dedo: String!
  direccion: String!
  email: String!
  fech_nac: String!
  id_empleado: String!
  nombre: String!
  Habilidades: String!
  descHabilidades: String!
}

type Query {
 hello: String!
}

type Mutation {
  Formulario (apellido:String!,dedo:String!,direccion:String!,email:String!,fech_nac:String!,id_empleado:String!,nombre:String!,Habilidades:String!,descHabilidades:String!): Formulario!
}

`;
export default typegql;
