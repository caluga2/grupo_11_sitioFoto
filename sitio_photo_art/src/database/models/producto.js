module.exports = function (sequelize, dataTypes) {
  let alias = "productos";
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  let colums = {
    productoID: {
      type: dataTypes.INTEGER,
      allowNull: FALSE,
    },

    nombre: {
      type: dataTypes.VARCHAR(45),
      allowNull: FALSE,
    },

    descripcion: {
      type: dataTypes.TEXT,
      allowNull: FALSE,
    },

    precio: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: FALSE,
    },

    tipoDeProductoID: {
      type: dataTypes.INTEGER,
      validate: {
        defaultValue: NULL,
        max: 11,
        allowNull: TRUE,
      },
    },

    tamanoDeProductoID: {
      type: dataTypes.INTEGER,
      validate: {
        defaultValue: NULL,
        max: 11,
        allowNull: TRUE,
      },
    },
  };
  const producto = sequelize.define(alias, colums, config);

  return producto;
};
