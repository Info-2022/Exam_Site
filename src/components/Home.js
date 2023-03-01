import React from "react";
import pic from "../images/first.jpg";
import pic1 from "../images/login_image.jpg";
import "../App.css";

const Home = () => {
  return (
    <>
      {/* section */}
      <div id="section">
        <div className="images">
          <img src={pic} alt="" />
        </div>
        <div className="note">
          <h1>Learning Today,</h1>
          <h1>Leading Tomorrow...</h1>
          <p>
            Let Us remember: "One Book,one pen,one child and one teacher can
            change the world."
          </p>
          <input id="learnmore" type="button" value="Learn more..." />
        </div>
      </div>
      <div id="section-2">
        <div id="im">
          <img src={pic1} alt="" />
        </div>
        <div class="note-2">
          <h4>Learn About Us___</h4>
          <h2>Best School In Online..</h2>
          <p>
            Online learning involves courses offered by primary institutions
            that are 100% virtual. Online learning, or virtual classes offered
            over the internet, is contrasted with traditional courses taken in a
            brick-and-mortar school building
          </p>
          <p class="para">
            Online courses require more time than on-campus classes. ...{" "}
          </p>
          <p class="para">
            Online courses make it easier to procrastinate. ...
          </p>
          <p class="para">
            Online courses require good time-management skills. ...
          </p>
          <p class="para">
            Online courses may create a sense of isolation. ...
          </p>
          <p class="para">
            Online courses allow you to be more independent. ...
          </p>
          <p class="para">
            Online courses require you to be an active learner.
          </p>
        </div>
      </div>

      {/* footer  */}

      <div id="footer">
        <div className="site-logo">
          <h2 className="knl">
            <span className="cap">K</span>
            <span className="small">n</span>
            <span className="cap">O</span>
            <span className="small">wl</span>
            <span className="cap">E</span>
            <span className="small">d</span>
            <span className="cap">GE</span>
          </h2>
          <p>
            Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
            dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
            stet diam duo eos rebum ipsum diam ipsum elitr.
          </p>
        </div>
        <div class="content">
          <div>
            <h2>Get in Touch</h2>
            <h4>
              <i class="fa-solid fa-location-dot"></i> Address
            </h4>
            <p>123 Street,Hyderabad,Ts</p>
            <h4>
              <i class="fa-solid fa-envelope"></i> Email
            </h4>
            <p>knowledge@gmail.com</p>
            <h4>
              <i class="fa-solid fa-phone"></i> Phone
            </h4>
            <p>+91 9876541236</p>
          </div>
        </div>
        <div className="social-links">
          <h2>Social links</h2>
          <a href="https://www.facebook.com/login/" className="sl">
            {" "}
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?source=auth_switcher"
            className="sl"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/login" className="sl">
            {" "}
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://web.whatsapp.com/" className="sl">
            {" "}
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
