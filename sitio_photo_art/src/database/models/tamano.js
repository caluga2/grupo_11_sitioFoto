module.exports = function (sequelize, dataTypes) {
  let alias = "tamanos";
  let config = {
    tableName: "tamanos",
    timestamps: false,
  };
  let colums = {
    tamanoDeProductoID: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 11,
      },
    },
    tamanoDeProducto: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  const tamano = sequelize.define(alias, colums, config);

  return tamano;
};
