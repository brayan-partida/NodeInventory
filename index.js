const express = require("express"),
  path = require("path"),
  morgan = require("morgan");
// mysql = require("mysql"),

const app = express();
const cors = require("cors");
/**
 * se encuentra todas las
 * rutas correspondientes
 */
const usersRouters = require("./src/routes/usersRoutes");
const departamentRoutes = require("./src/routes/departamentRoutes");
const itemRoutes = require("./src/routes/itemRoutes");
const loansRoutes = require("./src/routes/loansRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const lostItemsRoutes = require("./src/routes/lostItemsRoutes");
// settings
app.set("port", process.env.PORT || 3009);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
//ANCHOR routes
app.use("/api/users", usersRouters);
app.use("/api/departament", departamentRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/loans", loansRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/lostitem", lostItemsRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
