const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { check, validationResult, body } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.resdirect("home");
  },

  list: function (req, res) {
    res.render("userList", { users: users });
  },
  login: (req, res) => {
    return res.render("login");
  },
  procesLogin: (req, res) => {
    let errores = validationResult(req);
    /*if (errores.isEmpty()) {
      let userssJSON = usersFilePath;
      let userss;
      if (userss.JSON == "") {
        userss = [];
      } else {
        userss = JSON.parse(userssJSON);
      }*/
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(req.body.contrasenaLogin, users[i].contrasena)) {
          var usuarioALogearse = users[i];
          //break;
        }
      }
    }
    if (usuarioALogearse == undefined) {
      return res.render("login", {
        errores: [{ msg: "Credenciales inválidas" }],
      });
      // agregar este corchete cuando se descomente la 24 }
    } else {
      return res.render("login", { errores: errores.errores });
    }
    res.redirect("home");
  },

  /*
 users = JSON.parse(usersJSON);
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (
            bcrypt.compareSync(req.body.contrasenaLogin, users[i].contrasena)
          ) {
            var usuarioALogearse = users[i];
            break;
          }
        }
        if (usuarioALogearse == undefined) {
          
        }
        req.session.usuarioALogearse = usuarioALogearse;
        res.render("login");
      }
    }
  },*/
  register: (req, res) => {
    res.render("register");
  },
  // Create -  Method to store

  store: (req, res) => {
    let errores = validationResult(req);
    if (errores.isEmpty()) {
      let image;
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
      });
    }
  },
};

module.exports = controller;
