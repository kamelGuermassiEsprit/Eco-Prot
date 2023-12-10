const http = require("http");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const mongoconnect = require("./config/dbconnection.json");
const path = require("path");




//const { add } = require("./controller/chatcontroller");

const { addeventsocket,Affichersocket } = require("./controller/eventcontroller");




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
app.use("/event",eventrouter);
app.use("/formation",formationrouter);




const server = http.createServer(app);


const io = require("socket.io")(server);

io.on("connection", (socket) => {
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



    

 


  });

});








server.listen(3000, console.log("server run"));
module.exports = app;
