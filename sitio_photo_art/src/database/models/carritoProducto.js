module.exports = function (sequelize, dataTypes) {
  let alias = "carritosProductos";
  let config = {
    tableName: "carritosProductos",
    timestamps: false,
  };
  let colums = {
    carritoProductoID: {
      type: dataTypes.INTEGER,
    },
    productoID: {
      type: dataTypes.INTEGER,
    },
    carritoID: {
      type: dataTypes.INTEGER,
    },
  };

  const carritoProducto = sequelize.define(alias, colums, config);

  carritoProducto.associate = function (models) {
    carritoProducto.hasMany(models.usuarios, {
    as: "usuarios",
    foreignKey: "carritoID",
  });};
  

  return carritoProducto;
};
 