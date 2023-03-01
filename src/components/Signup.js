import React from "react";
import "../App.css";

const Signup = () => {
  const pageRedirect = () => {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var date = document.getElementById("date").value;

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      password === "" ||
      cpassword === "" ||
      date === ""
    ) {
      alert("please fill all the details");
    } else {
      window.location.replace("./Emailverification");
    }
  };
  return (
    <>
      <div className="signupmain">
        <div className="signupdiv">
          <h2>Signup</h2>

          <div id="signupform">
            <label>FirstName </label>
            <input type="text" id="fname" placeholder="Enter a Name" required />
            <label>LastName </label>
            <input type="text" id="lname" placeholder="Enter a Name" required />
            <label>Email </label>
            <input
              type="email"
              id="email"
              placeholder="Enter a Email"
              required
            />
            <label>password </label>
            <input
              type="password"
              id="password"
              placeholder="Enter a Password"
              required
            />
            <label>Confirm-password </label>
            <input
              type="password"
              id="cpassword"
              placeholder="Enter a Password"
              required
            />
            <label>DateofBirth </label>
            <input type="date" id="date" required />
            <button onClick={pageRedirect} id="user1">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
