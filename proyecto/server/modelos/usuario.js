module.exports = function(sequelize, Sequelize) {
    return sequelize.define('usuario', {
        id_usuario: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
        },
        email: {
            type: Sequelize.STRING
        },
        clave: {
            type: Sequelize.STRING
        }
    },{
        tableName: 'usuario'
    });
};
