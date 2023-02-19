import "./App.css";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        placeholder="Message..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join room</button>
      <input
        placeholder="Message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send message</button>
      <h4>Message:</h4>
      {received}
    </div>
  );
}

export default App;
