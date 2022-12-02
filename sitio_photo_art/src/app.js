const express = require("express");

const app = express();

const path = require("path");

const methodOverride = require("method-override");

app.use(express.static("../public"));

// **** Middlewares  ****
app.use(express.static(path.join(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

// **** Template Engine - (don't touch) ****
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas

// **** Route System require and use() ****
const mainRouter = require("./routes/main"); // Rutas main
const productsRouter = require("./routes/products"); // Rutas /products
const usersRouter = require("./routes/users"); //Rutas users

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
  console.log("Servidor funcionando en puerto", 3001);
});
