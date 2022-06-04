import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import AuthLogin from "./pages/AuthLogin";
import Modal from "react-modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import modal from "../src/images/modal.svg";
import SupportAdmin from "./chat/SupportAdmin";
import Sendmail from "./components/Sendmail/index";
import ResearchField from "./pages/ResearchField";
 import Article from "./pages/Article/Article";
import ALL from "./pages/ALL/ALL";
import A from "./pages/A";
import B from "./pages/B";
import sound from '../src/pages/sound.wav'
import Sidebar from "./pages/Sidebar";
const theme = createTheme();
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "20rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
 Modal.setAppElement(document.getElementById("root"));

function App(props) {
  const audio = new Audio(
    `${sound}`
  );
useEffect(()=>{
   const start = () => {
    audio.play();
  };
  var o=document.querySelectorAll(".a")
  o.forEach(a=>a.addEventListener('dblclick',start)) 
},[])


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  var modalStyles = { overlay: {} };
  modalStyles.overlay["z-index"] = 10;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <BrowserRouter> 
      <ThemeProvider theme={theme}>
        <div {...props} className="App">
        

          <Modal
            style={modalStyles}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

            <img alt="" style={{ width: "100%" }} src={modal} />
            <button
              style={{
                width: "5rem",
                height: "2rem",
                marginLeft: "3rem",
                backgroundColor: "var(--main)",
              }}
              onClick={closeModal}
            >
              Not now
            </button>
          </Modal>
    
          <Routes>
            {" "}
            <Route element={<B />}>
              <Route path="/field" element={<ALL />} />              <Route path="/R" element={<Sidebar/> } />

            </Route>
            <Route element={<A />}>
              <Route path="/" element={<Home openModal={openModal} />} />
              <Route path="/login" element={<AuthLogin />} />
              <Route path="/signup" element={<Auth />} />
              <Route path="/main" element={<SupportAdmin />} />
              <Route path="/email" element={<Sendmail />} />
              <Route path="/researchfield" element={<ResearchField />} />
              <Route path="/article" element={<Article />} />
            </Route>
          </Routes>
        

        </div>
      </ThemeProvider>
      
    </BrowserRouter>
  );
}

export default App;
