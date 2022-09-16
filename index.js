const express = require("express"); //
const app = express();
const morgan = require("morgan"); //

// const cors = require("cors");
// const router = require("./src/routes/index");
// const pool = require("./src/database/database.js");

const { create } = require("express-handlebars");

const hbs = create({
  layoutsDir: __dirname + "/src/views/layouts",
  extname: ".hbs",
  defaultLayout: "index",
  partialsDir: __dirname + "/src/views/partials/",
});

app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

app.set("port", 4000);

app.use(morgan("dev"));

//routes
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

fakeApi = () => {
  return [
    {
      name: "Katarina",
      lane: "midlaner",
    },
    {
      name: "Jayce",
      lane: "toplaner",
    },
    {
      name: "Heimerdinger",
      lane: "toplaner",
    },
    {
      name: "Zed",
      lane: "midlaner",
    },
    {
      name: "Azir",
      lane: "midlaner",
    },
  ];
};

app.get("/", (req, res) => {
  res.render("main", {
    layout: "index",
    suggestedChamps: fakeApi(),
    listExists: true,
  });
});

app.listen(app.get("port"), () => {
  console.log("Listening on port ", app.get("port"));
});
