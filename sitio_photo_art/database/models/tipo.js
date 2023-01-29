module.exports = function (sequelize, dataTypes) {
  let alias = "tipos";
  let config = {
    tableName: "tipos",
    timestamps: false,
  };
  let colums = {
    tipoDeProductoID: {
      type: dataTypes.INTEGER,
      allowNull: FALSE,
      validate: {
        max: 11,
      },
    },
    tipoDeProducto: {
      type: dataTypes.VARCHAR(45),
      allowNull: FALSE,
    },
  };

  const tipo = sequelize.define(alias, colums, config);

  return tipo;
};
