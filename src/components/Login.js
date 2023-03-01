import React from "react";
import pic from "../images/loginsidepage.jpg";
import "../App.css";

function Login() {
  const btnClick = (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const id = e.currentTarget.id;

    if (id === "admin") {
      if (username === "info@gmail.com" && password === "info@123") {
        alert("This is admin login");
      } else if (username === "" && password === "") {
        alert("Please Enter username and password");
      } else {
        alert("Your credentials are incorrect");
      }
    } else if (id === "user") {
      if (username === "merica@gmail.com" && password === "merica@123") {
        alert("This is user login");
      } else if (username === "" && password === "") {
        alert("Please Enter  username and password");
      } else {
        alert("Your credentials are incorrect");
      }
    }
  };
  return (
    <div className="loginmain">
      <div className="imgdiv">
        <img src={pic} alt="img" id="imgtag" />
      </div>
      <div className="formdiv">
        <h3 id="headtag">Login</h3>
        <form>
          <label> Email/Username </label>
          <input
            type="text"
            id="username"
            placeholder="Enter Email/Username"
            autoFocus
            required
          />
          <label> Password </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <br />
          <button id="user" onClick={btnClick}>
            User Login
          </button>
          <button id="admin" onClick={btnClick}>
            Admin Login
          </button>

          <p id="forget">
            <a className="anchor1" href="./Emailverification">
              forget password ?
            </a>
          </p>
          <p id="newregister">
            Create new account:{" "}
            <a className="anchor1" href="./Signup">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
