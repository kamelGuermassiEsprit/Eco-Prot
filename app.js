const http = require("http");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const mongoconnect = require("./config/dbconnection.json");
const path = require("path");




//const { add } = require("./controller/chatcontroller");

const { addeventsocket,Affichersocket } = require("./controller/eventcontroller");




const { login, emailUserConnected } = require("./controller/userController");
mongo
  .connect(mongoconnect.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connecter"))
  .catch((err) => console.log(err));
  


const userrouter = require("./routes/user");
const eventrouter = require("./routes/event");
const formationrouter = require("./routes/formation");

let app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userrouter);
app.use("/event", eventrouter);
app.use("/formation", formationrouter);

app.use("/", userrouter);
const User = require("./model/user");
const server = http.createServer(app);

const io = require("socket.io")(server);

var usrco;
io.on("connection", (socket) => {
  app.post("/login", (req, res) => {
    login(req, res, socket);
    usrco = req.body.email;
  });
  socket.on("user-connected", async (data) => {
    console.log(data, "(((((((((((");
    socket.emit("user-connected-front", data);
  });
  console.log("user connected");
  socket.emit("msg", "user is connected");


  
  socket.on("event", (data) => {
    console.log("Received event:", data);


    // Broadcast the event data to all connected clients
    addeventsocket(data);

    io.emit("event", data);
  });

  
  
  socket.on("afficherStat", async () => {
    
    // Récupérez tous les événements depuis la base de données
    const events = await Affichersocket();

    // Émettez les événements au client
    io.emit("afficherStat", events);
  });


  socket.on("disconnect", () => {
    console.log("user disconnect");
    io.emit("msg", "user disconnect");

    socket.on("partie", (data) => {
      addpartiesocket(data);
      io.emit("partie", data);
    });

    socket.on("aff", async (data) => {
      const r = await affichesocket(data);
      console.log("jjjjjj", JSON.stringify(r));
      io.emit("aff", r);
    });

    socket.on("typing", (data) => {
      io.emit("typing", data + "is typing");
    });

    socket.on("msg", (data) => {
      add(data.object);
      io.emit("msg", data.name + ":" + data.object);
    });
  });
});

server.listen(3000, console.log("server run"));
module.exports = app;
