const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


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

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.body.email) {
        if (bcrypt.compareSync(req.body.contrasenaLogin, users[i].contrasena)) {
          var usuarioALogearse = users[i];
        }
      }
      console.log(req.body.email)
    }
    if (usuarioALogearse == undefined) {
      return res.render("errorLogin")
    }else {
       req.session.userLogged =usuarioALogearse;
       console.log(req.session)

      return res.render("home",{
        user: req.session.userLogged
      });}
    },

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
