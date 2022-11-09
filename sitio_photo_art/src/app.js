const express = require("express");

const app = express();

app.use(express.static("../public"));

app.set("view engine", "ejs");

app.listen(3001, () => {
  console.log("Servidor funcionando en puerto", 3001);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/Producto", (req, res) => {
  res.render("Producto");
});

app.get("/Carrito", (req, res) => {
  res.render("Carrito");
});

app.get("/productAdd", (req, res) => {
  res.render("productAdd");
});
