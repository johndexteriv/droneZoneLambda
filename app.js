const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const compression = require("compression");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());

// const corsOptions = {
// 	"Access-Control-Allow-Origin": "http://dronezones.io/",
// 	origin: "*",
// };
// app.options("*", cors(corsOptions));

// app.options("*", cors());
// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/api-routes.js")(app);

module.exports = app;
