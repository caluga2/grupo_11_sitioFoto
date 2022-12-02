const express = require("express");
const app = express();
const path = require("path");

// **** Middlewares  ****
app.use(express.static("public"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// **** Route System require and use() ****
const mainRouter = require("./src/routes/main"); // Rutas main
const productsRouter = require("./src/routes/products"); // Rutas /products
const usersRouter = require("./src/routes/users"); //Rutas users

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
  console.log("Servidor funcionando en puerto", 3001);
});
