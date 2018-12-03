import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const resolvers = {
	Query: {
		hello: () => "hello",
		soluc_candidato: async (_: any, args: any, { db }: { db: any }) => {
			const Empleados = await db.models.Empleados.findAll({ raw: true })
			const frase = args.preg;
			let puntaje = 0;
			let mejorOpcion: any = {};
			let resultado: {}[] = [];
			console.log(Empleados)
			const res = Empleados.map((i: any) => {
				if (i.habilidades.split(',').length > 1) {
					let count = 0
					frase.split(" ").map((e: any) => {
						i.habilidades.split(',').map((a: any) => a.split(' ').map((k: any) => {
							if (e == k) {
								count += 1
							}
						}))
						console.log(puntaje, count, i.nombre)
						if (count > puntaje) {
							puntaje = count
							mejorOpcion = Object.assign({}, mejorOpcion, i)
							resultado.pop()
							resultado.push(mejorOpcion)
							count = 0
						} else if ( count == puntaje ) {
							puntaje = count
							mejorOpcion = Object.assign({}, mejorOpcion, i)
							resultado.push(mejorOpcion)
							count = 0
						}
						console.log(resultado)
					})
				} else {
					frase.split(" ").map((e: any) => {
						let count = 0
						i.habilidades.split(' ').map((k: any) => {
							if (e == k) {
								count += 1
							}
						})
						console.log(puntaje, i.nombre)
						if (count > puntaje) {
							puntaje = count
							mejorOpcion = Object.assign({}, mejorOpcion, i)
							resultado.pop()
							resultado.push(mejorOpcion)
							count = 0
						} else if ( count == puntaje ) {
							puntaje = count
							mejorOpcion = Object.assign({}, mejorOpcion, i)
							resultado.push(mejorOpcion)
							count = 0
						}
						console.log(resultado)
					})
				}
			})
			console.log(resultado)
			return resultado;
		},
	},
	// tslint:disable-next-line:object-literal-sort-keys
	Mutation: {
		Formulario: async (_: any, args: any, { db }: { db: any }) => {
			const { Empleados, Huellas } = db.models
			try {
				const id = uuidv4();
				const fecha_nac = moment(args.fech_nac).isValid() ? moment(args.fech_nac) : false;
				console.log(fecha_nac)
				const { dataValues } = await Empleados.create({
					uuid: id,
					nombre: args.nombre,
					apellido: args.apellido,
					email: args.email,
					direccion: args.direccion,
					fech_nac: fecha_nac,
					estatus: args.estatus,
					habilidades: args.habilidades,
					habilidades_desc: args.habilidades_desc,
				});
				const res = await Huellas.create({
					uuid: id,
					huella: id,
					EmpleadoUuid: id
				});
				console.log(res)
				return dataValues
			} catch (e) {
				throw new Error(e)
			}
		},
	},
};

export default resolvers;
