const express = require("express"),
  path = require("path"),
  morgan = require("morgan")
 // mysql = require("mysql"),
 
  const app = express();
const body_parser = require("body-parser");

// importing routes
const usersRouters = require("./src/routes/usersRoutes");
const departamentRoutes=require("./src/routes/departamentRoutes")
// settings
app.set("port", process.env.PORT || 3009);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/users",usersRouters);
app.use("/api/departament",departamentRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));


// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
