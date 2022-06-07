import React from "react";
import D from "../images/D.svg";
import logofigma from "../images/logofigma.svg";
import "../components/Design.css";
import explore from "./explore.PNG";
import discover from "./discover.PNG";
import share from "./share.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
function Design() {
  return (
    <>
      <div className="maindiv">
        <img className="imagecover" src={D} />

        <img
          style={{
            position: "relative",
            width: "13rem",
            marginLeft: "calc(50% - 6.5rem)",
          }}
          src={logofigma}
        />

        <h2
         className="HEADERMAINTITLE"
        >
          {" "}
          Discover Our Innovative Medical Promotion 

</h2>

<form>
     <div class="input-group">
      <input type="text" id="search" placeholder="Search..." autocomplete="off"/>
      <label for="search"><FontAwesomeIcon style={{fontSize:'1.2rem'}} icon={faSearch}/></label>
    </div>
    
    <div class="suggestion-list hidden">
    </div>
  </form>


        <h5 className="headersmall">
          {" "}
          Find latest researches ,share medical articles, connect with other
          researchers from different countries.
        </h5>
        <div className="CARDS">
          <div class="cards">
            <article class="card">
              <a href="#">
                <figure class="card-thumb">
                  <img src={explore} alt="angular" />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Discover</h2>
                  <p class="card-excerpt">
                    Discover a community of researchers and experts go with you
                    to the next level.
                  </p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="#">
                <figure class="card-thumb">
                  <img src={discover} alt="react" />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Explore</h2>
                  <p class="card-excerpt">
                    Explore new technologies, cures, and researches that make
                    your choices much easier.
                  </p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="#">
                <figure class="card-thumb">
                  <img src={share} alt="vue" />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Share</h2>
                  <p class="card-excerpt">
                    Share what you find useful to other doctors , that can make
                    a shift in many patients cases.
                  </p>
                </div>
              </a>
            </article>
          </div>
        </div>

        <div className="overlaydiv"></div>
      </div>
      <div>hhhhhhhhssssssssssshhhhhh</div>
    </>
  );
}

export default Design;
