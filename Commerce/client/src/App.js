import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/user/Landing";
import { Login } from "./pages/user/Login";
import { Register } from "./pages/user/Register";
import { LoginAdmin } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<LoginAdmin />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
