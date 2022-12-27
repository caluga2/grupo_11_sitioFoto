const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.resdirect("home")
  },

  list: function (req, res) {
    res.render("userList", { users: users });
  },

  register: (req, res) => {
    res.render("register");
  },
  // Create -  Method to store

  store: (req, res) => {
    let image;
    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default-image.png";
    }
    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      image,
    };
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    res.redirect("/");
  },
};

module.exports = controller;
