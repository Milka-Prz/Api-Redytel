
const empleado = (sequelize: any, DataTypes: any) => {
	const Empleado = sequelize.define("Empleado", {
		id_empleado: {
			type: DataTypes.UUIDV4,
		},
		nombre: {
			type: DataTypes.STRING,
		},
		// tslint:disable-next-line:object-literal-sort-keys
		apellido: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		direccion: {
			type: DataTypes.STRING,
		},
		fech_nac: {
			type: DataTypes.DATE,
		},
		estatus: {
			type: DataTypes.BOOLEAN,
		},
	});
	Empleado.associate = ( models: any ) => {
		Empleado.hasMany( models.habilidades )
		Empleado.hasMany( models.huellas )
		return;
	}
	return Empleado;
}
export default empleado;