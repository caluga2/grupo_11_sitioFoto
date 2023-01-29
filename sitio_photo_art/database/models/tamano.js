module.exports = function (sequelize, dataTypes) {
  let alias = "tamanos";
  let config = {
    tableName: "tamanos",
    timestamps: false,
  };
  let colums = {
    tamanoDeProductoID: {
      type: dataTypes.INTEGER,
      allowNull: FALSE,
      validate: {
        max: 11,
      },
    },
    tamanoDeProducto: {
      type: dataTypes.VARCHAR(45),
      allowNull: FALSE,
    },
  };

  const tamano = sequelize.define(alias, colums, config);

  return tamano;
};
