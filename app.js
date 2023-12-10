const http = require("http");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const mongoconnect = require("./config/dbconnection.json");
const path = require("path");
const { add } = require("./controller/chatcontroller");
const {
  get,
  addpartiesocket,
  affichesocket,
} = require("./controller/weathercontroller");
mongo
  .connect(mongoconnect.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connecter"))
  .catch((err) => console.log(err));

const classroomrouter = require("./routes/classroom");
const weatherrouter = require("./routes/weather");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/classroom", classroomrouter);
app.use("/weather", weatherrouter);

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");
  /*socket.emit("msg", "user is connected");*/
 
 
  socket.on("affichage", async (data) => {
    const r = await get(data);
    console.log("het", JSON.stringify(r));
    io.emit("affichage",r);
  });





  socket.on("partie", (data) => {
    addpartiesocket(data);
    io.emit("partie", data);
  });

  socket.on("aff", async (data) => {
    const r = await affichesocket(data);
    console.log("jjjjjj", JSON.stringify(r));
    io.emit("aff", r);
  });
/*
  socket.on("typing", (data) => {
    io.emit("typing", );
  });
*/
  socket.on("msg", (data) => {
    add(data.object);
    io.emit("msg", data.name + ":" + data.object);
  });

  /*socket.on("disconnect", () => {
    console.log("user disconnect");
    io.emit("msg", "user disconnect");
  });*/
});
server.listen(3000, console.log("server run"));
module.exports = app;
