import React from "react";
import "./Subs.css";
import Sub from "./Sub.png";
function Subs() {
  return (
    <>
      <div className="ToContain">
        <div className="firstDiv">
          <h2 className="MainTitle">Keep in the know</h2>
          <div className="secondtitle">
            Subscribe to keep up-to-date with everything .
          </div>
          <div className="SearchContainer">
            <input
              type="email"
              placeholder="Enter your email..."
              className="inpt"
            />
            <button className="sub">Subscribe</button>
          </div>
        </div>
        <div className="SecondDiv">
          <img className="imga" src={Sub} />
        </div>
      </div>
    </>
  );
}

export default Subs;
