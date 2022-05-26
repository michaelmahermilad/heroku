import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import AuthLogin from "./pages/AuthLogin";
import Modal from "react-modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import modal from '../src/images/modal.svg'
import SupportAdmin from "./chat/SupportAdmin";
import Sendmail from './components/Sendmail/index'
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));
function App(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  var modalStyles = {overlay: {}};
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
          <Header />

          <Modal
           style={ modalStyles }

            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className='Modal'
            overlayClassName="Overlay"
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

            <img style={{width:'100%'}} src={modal}/>
            <button  style={{width:'5rem',height:'2rem',marginLeft:'3rem', backgroundColor:'var(--main)'}}onClick={closeModal}>Not now</button>
        
          </Modal>

          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/login" element={<AuthLogin />} />
            <Route path="/signup" element={<Auth />} />
            <Route path='/main' element={<SupportAdmin/>}/>
            <Route path='/email' element={<Sendmail/>}/>
          </Routes>
        </div>
      </ThemeProvider>
      ;
    </BrowserRouter>
  );
}

export default App;
