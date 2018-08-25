module.exports = function(sequelize, Sequelize) {
    return sequelize.define('orden', {
        id_orden: {
          type: Sequelize.INTEGER(11),
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        usuario_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: 'usuario',
          referencesKey: 'id_usuario'
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        detalle: {
          type: Sequelize.STRING(8000),
          allowNull: false
        },
        estado: {
          type: Sequelize.STRING(8000),
          allowNull: false
        },
        fecha: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull: false
        }
    }, {
        tableName: 'orden'
    });
};
