const carritosProductos = require("./carritoProducto.js");

module.exports = function (sequelize, dataTypes) {
  let alias = "usuarios";
  let config = {
    tableName: "usuarios",
    timestamps: false,
  };
  let colums = {
    usuarioID: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 11,
      },
    },
    nombre: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    contrasena: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    foto: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    carritoProductoID: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 11,
      },
    },
  };
  const usuario = sequelize.define(alias, colums, config);

  usuario.associate = function (models) {
    usuario.belongsTo(models.carritosProductos, {
    as: "carritos",
    foreignKey: "carritoID",
  });};
  

  return usuario;
};
