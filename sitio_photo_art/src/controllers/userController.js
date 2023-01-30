const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    res.resdirect("home", {
      user: req.session.userLogged,
    });
  },

  list: function (req, res) {
    res.render("userList", { users: users, user: req.session.userLogged });
  },
  login: (req, res) => {
    return res.render("login", {
      user: req.session.userLogged,
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },

  procesLogin: (req, res) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(req.body.contrasenaLogin, users[i].contrasena)) {
          var usuarioALogearse = users[i];
        }
      }
    }
    if (usuarioALogearse == undefined) {
      return res.render("errorLogin", { user: req.session.userLogged });
    } else {
      req.session.userLogged = usuarioALogearse;
      return res.render("home", {
        user: req.session.userLogged,
      });
    }
  },

  register: (req, res) => {
    res.render("register", {
      user: req.session.userLogged,
    });
  },
  // Create -  Method to store

  store: (req, res) => {
    let errores = validationResult(req);
    if (errores.isEmpty()) {
      let image;
      // seguir revisando para que se fije si el mail ya se encuentra registrado
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          return res.render("register", {
            errores: [
              {
                msg: "Este email ya está registrado",
              },
            ],
            user: req.session.userLogged,
          });
        }
      }
      // --------------------------------- hasta aca ---------------------
      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = "default-image.png";
      }

      let newUser = {
        id: users[users.length - 1].id + 1,
        nombre: req.body.nombre,
        email: req.body.email,
        contrasena: bcrypt.hashSync(req.body.contrasena, 10),
        image,
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
      res.redirect("/");
    } else {
      res.render("register", {
        errores: errores.array(),
        user: req.session.userLogged,
      });
    }
  },
};

module.exports = controller;
