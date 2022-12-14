const express = require("express"); //
const app = express();
const morgan = require("morgan"); //
const cors = require("cors");
const router = require("./src/routes/index");
const pool = require("./src/database/database.js");

app.set("port", 4000);

//middlewares
app.use(morgan("dev"));

//routes
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//iniciar
app.listen(app.get("port"), () => {
  console.log("Listening on port ", app.get("port"));
});
