import Sequelize from "sequelize";

const basededatos: string = process.env.BD || "Redytel";
const usuario: string = process.env.USER  || "sa";
const pwd: string = process.env.PWD || "milka";
const host: string = process.env.HOST || "127.0.0.1";

const sequelize = new Sequelize ( basededatos, usuario, pwd, {
    dialect: "mssql",
    host,
    operatorsAliases: false,
    pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0,
   },
});

const models = {
	empleado: sequelize.import("../models/empleado"),
	habilidades: sequelize.import("../models/habilidades"),
	huellas: sequelize.import("../models/huellas"),
}

export default models;
