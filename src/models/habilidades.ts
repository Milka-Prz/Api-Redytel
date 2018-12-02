const Habilidades = db.define("Habilidades", {
    descHabilidades: {
        type: sequelize.STRING,
    },
    // tslint:disable-next-line:object-literal-sort-keys
    Habilidades: {
        type: sequelize.STRING,
    },
    idHabilidades: {
        type: sequelize.INTEGER,
    },
    id_empleado: {
        type: sequelize.STRING,
    },
});