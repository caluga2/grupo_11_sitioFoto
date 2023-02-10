module.exports = function (sequelize, dataTypes) {
  let alias = "productos";
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  let colums = {
    productoID: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    nombre: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },

    descripcion: {
      type: dataTypes.TEXT,
      allowNull: false,
    },

    precio: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    tipoDeProductoID: {
      type: dataTypes.INTEGER,
      validate: {
        defaultValue: null,
        max: 11,
        allowNull: true,
      },
    },

    tamanoDeProductoID: {
      type: dataTypes.INTEGER,
      validate: {
        defaultValue: null,
        max: 11,
        allowNull: true,
      },
    },
  };
  const producto = sequelize.define(alias, colums, config);

  return producto;
};
