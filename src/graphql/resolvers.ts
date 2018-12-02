
const resolvers = {
  Query: {
    hello: () => {
      // await testConnection();
      return "Hello word";
    },
  },
  // tslint:disable-next-line:object-literal-sort-keys
  Mutation: {
    Formulario: (_: any, args: any ) => {
      return {
        apellido: args.apellido,
        dedo: args.dedo,
        direccion: args.direccion,
        email: args.email,
        fech_nac: args.fech_nac,
        id_empleado: args.id_empleado,
        nombre: args.nombre,
        // tslint:disable-next-line:object-literal-sort-keys
        Habilidades: args.Habilidades,
        descHabilidades: args.descHabilidades,
      };
    },
  },
};

export default resolvers;
