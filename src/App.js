import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Courses } from "./components/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Contact } from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import Emailverification from "./components/Emailverification";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="emailverification" element={<Emailverification />} />
      </Routes>
    </>
  );
}

export default App;
