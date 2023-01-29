const carritosProductos = require("carritoProducto.js");

module.exports = function (sequelize, dataTypes) {
  let alias = "usuarios";
  let config = {
    tableName: "usuarios",
    timestamps: false,
  };
  let colums = {
    usuarioID: {
      type: dataTypes.INTEGER,
      allowNull: FALSE,
      validate: {
        max: 11,
      },
    },
    nombre: {
      type: dataTypes.VARCHAR(45),
      allowNull: FALSE,
    },
    email: {
      type: dataTypes.VARCHAR(45),
      allowNull: FALSE,
    },
    contrasena: {
      type: dataTypes.VARCHAR(45),
      allowNull: FALSE,
    },
    foto: {
      type: dataTypes.VARCHAR(100),
      allowNull: FALSE,
    },
    carritoProductoID: {
      type: dataTypes.INTEGER,
      allowNull: FALSE,
      validate: {
        max: 11,
      },
    },
  };
  const usuario = sequelize.define(alias, colums, config);

  usuario.associate = function (models) {};
  usuario.belongsTo(models.carritosProductos, {
    as: "carritos",
    foreignKey: "carritoID",
  });

  return usuario;
};
