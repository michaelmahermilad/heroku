import React  from "react";
 import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
 import Auth from "./pages/Auth";
import AuthLogin from "./pages/AuthLogin";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import C from "../src/images/C.png";
import SupportAdmin from "./chat/SupportAdmin";
import Sendmail from "./components/Sendmail/index";
import ResearchField from "./pages/ResearchField";
import Article from "./pages/Article/Article";
import ALL from "./pages/ALL/ALL";
import A from "./pages/A";
import B from "./pages/B";
import Sidebar from "./pages/Sidebar";
import Design from "./components/Design";
import MedicalProducts from "./pages/MedicalProducts/MedicalProducts";
  const theme = createTheme();


function App(props) {
 

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  var modalStyles = { 
    height: "6rem",
    
    overlay: {} };
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
     
          <Routes>
            <Route element={<B />}>
              <Route path="/field" element={<ALL />} />{" "}
              <Route path="/R" element={<Sidebar />} />
              <Route path="/DESIGN" element={<Design/>}/>
              <Route path="/medproducts" element={<MedicalProducts  key={Date.now()} />}/>
              <Route path="/medproducts/:name" element={<MedicalProducts  key={Date.now()}  />}/>

             </Route>
            <Route element={<A />}>
              
              <Route path="/" element={<Home   />} />
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
