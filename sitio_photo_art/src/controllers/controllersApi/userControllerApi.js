const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const usuarios = db.usuarios;

const userControllerApi = {
  list: async (req, res) => {
    try {
      let usersApi = await usuarios.findAll({
        attributes: ["nombre", "email", "usuarioID"],
      });
      let users = usersApi.map((user) => {
        return {
          ...user.dataValues,
          urlDetail: `http://localhost:3001/apiUser/apiList/${user.usuarioID}`,
          //image: `http://localhost:3001/images/users/${product.fotoProducto}`,
        };
      });
      res.json({
        meta: {
          status: 200,
          count: users.length,
        },
        data: {
          usersApi,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
  detail: (req, res) => {
    usuarios.findByPk(req.params.usuarioID, {}).then((user) => {
      //console.log(product)
      //console.log(product?.data?.id )
      //console.log(req.params.id)
      console.log(user.dataValues);

      if (
        user?.dataValues?.usuarioID !== null &&
        user?.dataValues?.usuarioID == req.params.usuarioID
      ) {
        let respuesta = {
          meta: {
            status: 200,
            total: user.length,
            url: "/apiUser/apiList/:usuarioID",
          },
          data: {
            usuarioID: user.dataValues.usuarioID,
            Nombre: user.dataValues.nombre,
            Email: user.dataValues.email,
            Imagen: user.dataValues.fotoUsuario,
            Url: `localhost:3001/apiUser/${user.dataValues.usuarioID}`,
          },
        };
        return res.json(respuesta);
      }
      return res.status(200).json("No existe el usuario");
    });
  },
};

module.exports = userControllerApi;