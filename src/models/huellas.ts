const Huellas = db.define("Huella", {
    dedo: {
        type: sequelize.STRING,
    },
    id_empleado: {
        type: sequelize.STRING,
    },
});