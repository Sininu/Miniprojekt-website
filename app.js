'use strict';
const express = require("express");
const path = require("path");
//const routes = require("./routes/index");
const app = express();
const port = process.env.PORT || 8080;

//express.static(root, [options]);
app.use("/static",express.static("public"));
// app.use( "/static", express.static(path.join(__dirname, "public")))
/*
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
    res.sendFile(path.join(__dirname, "/" + "style.css"));
});*/


app.listen(port);
console.log("server started" + port);

/*
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/", routes);
app.set("port", process.env.PORT || 3000);

app.listen(app.get('port'));

*/
//res.sendFile()