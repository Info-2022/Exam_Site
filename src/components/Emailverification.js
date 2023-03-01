import React from "react";
import "../App.css";

const Emailverification = () => {
  var orgotp;
  const sendOtp = () => {
    var email = document.getElementById("mail").value;
    if (email === "") {
      alert("Please enter your email");
    } else {
      var otp = Math.floor(Math.random() * 9000) + 1000;
      orgotp = otp;
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "infopanjagutta@gmail.com",
        Password: "A057A1D5D7AE6F6BC426E6A1F9B95EE9ADD2",
        To: `${email}`,
        From: "infopanjagutta@gmail.com", // put a real email address that is verified
        Port: "2525",
        Subject: "OTP Verification",
        Body: `The otp to verify the email is ${otp}`,
      }).then((message) => {
        alert("mail sent successfully");
        console.log(message);
      });
      setInterval(() => {
        orgotp = "";
        // document.getElementById("timeoutMsg").innerHTML =
        alert("OTP expired! Try resending otp again.");
      }, 20000);

      clearInterval();
    }
  };

  const otpVerify = () => {
    // console.log(typeof orgotp);
    if (parseInt(document.getElementById("sentotp").value) === orgotp) {
      // window.location.replace("./Homepage.js");
      document.getElementById("msg").innerText = "Valid OTP";
    } else {
      document.getElementById("msg").innerText = "Invalid OTP";
    }
  };

  return (
    <>
      <div id="emailverify">
        <div>
          <label>Email</label>

          <input type="text" id="mail" placeholder="Enter Email" />

          <button type="button" onClick={sendOtp} id="otp">
            {" "}
            Send OTP
          </button>
        </div>

        <div>
          <label>OTP</label>

          <input id="sentotp" type="number" placeholder="Enter otp" />

          <button id="verifybtn" type="button" onClick={otpVerify}>
            Verify
          </button>
        </div>
      </div>
    </>
  );
};
export default Emailverification;
