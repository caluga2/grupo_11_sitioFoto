module.exports = function (sequelize, dataTypes) {
  let alias = "tipos";
  let config = {
    tableName: "tipos",
    timestamps: false,
  };
  let colums = {
    tipoDeProductoID: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 11,
      },
    },
    tipoDeProducto: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
  };

  const tipo = sequelize.define(alias, colums, config);

  return tipo;
};
