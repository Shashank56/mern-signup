import React from "react";
import "./styles/homePage.styles.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Input from "./Input";
import Footer from "./footer";
import logo from "./images/image.png"

function HomePage() {

  return (
    <div className="main">
      <div className="image-holder" />
      <img
        alt="bgImage"
        // src="https://cdn.pixabay.com/photo/2016/08/22/02/18/lomografia-1611256_1280.jpg"
        src={logo}
      />
      
      <div className="form-holder">
        {/* <form>
          <div className="inputholder">
            <Input className="textInput" type={"text"} placeholder={"Meeting ID"} />
          </div>
        </form>
        <button className="button" type="submit">
          <span>Join meeting</span>
        </button>
        <button className="button" type="submit" onClick={myFunction()}>
            <span>Host meeting</span>
        </button> */}
        {/* <div id="myDiv"><h1>hsbjsxnn</h1></div> */}
        <form id="myDiv">
          <div className="open-icon">
            <LockOpenIcon fontSize="large" />
          </div>
          <h1>Sign in</h1>
          <div className="input-holder">
            <Input
              className="textInput"
              type={"text"}
              placeholder={"Email Address"}
            />
          </div>

          <Input className="textInput" type={"password"} placeholder={"Password"} />

          <div>
            <Input className="check-box" type="checkbox" /> &nbsp; Remember me
          </div>
          <button type="submit">
            <span>SIGN IN</span>
          </button>
          <div className="submenu">
            <div className="password-f">Forgot password?</div>
            <div className="sign-up">Dont have an account? Sign up</div>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default HomePage;
