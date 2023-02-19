const express = require("express");
const cors = require("cors");
const PORT = 9000;
const db = require("./models");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(`User connected: ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data)

  })
  socket.on("send_message", (data) => {
    // console.log(data);
    socket.to(data.room).emit("receive_message", data)
  });
});

app.use(express.json());
app.use(cors());

server.listen(3001, () => {
  console.log("Server running");
});

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(`ERROR: ${err}`);
//   } else {
//     // db.sequelize.sync({ alter: true });
//     console.log(`APP RUNNING at ${PORT} ✅`);
//   }
// });
