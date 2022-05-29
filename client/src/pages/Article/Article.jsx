import gsap from "gsap";
import React, { useEffect, useState } from "react";
import MovingText from "react-moving-text";
 import COVID from "../../images/COVID.png";
import Banner2 from "../Article/Banner2";
import styled from "styled-components";
import "../Article/article.css"
function Article() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
       setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    var tl = gsap.timeline({
      repeat: 100,
      repeatDelay: 3,
    });
    tl.fromTo(
      "#lo",
      { opacity: 0.8, x: -90 },
      { duration: 15, opacity: 1, x: 0 }
    );
  }, []);

  return (
    <div>
      <div
        className="ads"
        style={{
          zIndex: "10",
          transition: "0.8s linear",
          opacity: show ? "0" : "1",
          boxShadow: ".1px .3px 5px brown",
          position: "sticky",
          top: "0",
          marginTop: "3.3rem",
          background: "rgb(130,19,19)",
          background:
            "linear-gradient(242deg, rgba(130,19,19,1) 0%, rgba(117,16,16,0.7813276207965354) 0%, rgba(131,20,20,0.47076861458535524) 0%, rgba(115,20,40,0.5) 0%, rgba(119,18,18,0.5297748257654794) 0%, rgba(117,20,20,0.8713897325977775) 0%, rgba(120,15,15,1) 8%, rgba(121,12,12,0.942818304026349) 9%, rgba(119,17,17,0.9366071239021254) 27%)",
        }}
      >
        {" "}
        <div
          id="lo"
          style={{
            height: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "50%",
            margin: "auto",
            fontWeight: "700",
          }}
        >
          <img src={COVID} style={{ height: "100%" }} />
          <h5
            style={{
              color: "white",
              fontSize: "1.1rem",
              lineHeight: "1.1rem",
              textAlign: "left",
            }}
         
          >
            The Chance of Helping others is a great Gift .
          </h5>
        </div>
      </div>
      <Banner2 />
      <Divider />
    </div>
  );
}

export default Article;
const Divider = styled.div`
  height: 1rem;
  @media (max-width: 600px) {
    height: 2rem;
  }
`;
