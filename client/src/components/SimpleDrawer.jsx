import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ListIcon from "@mui/icons-material/List";
import { Collapse, IconButton } from "@mui/material";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";
import { ArrayofSections } from "../WebsiteSections.js";

const Logo = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  display: block;
  @media (max-width: 900px) {
    height: 30px;
  }
`;
export default function SimpleDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open1, setOpen1] = React.useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen1(!open1);
    toggleDrawer("right", true);
  };
  const arrauth = [
    { text: "Help Center", icon: <MailIcon /> },
    { text: <p>Join us</p>, icon: <MailIcon /> },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{
        background: "rgb(255,255,255)",
        height: "100vh",
        background:
          "linear-gradient(187deg, rgba(255,255,255,0.34965060216299493) 0%, rgba(121,9,9,0.3092779313555415) 83%)",
      }}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        overflowX: "hidden",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div onClick={toggleDrawer(anchor, false)}>
        <Link to="/">
          <Logo src={logo} alt="michael" />
        </Link>
      </div>
      <List>
        {ArrayofSections.map((i, index) => (
          <>
            <ListItem disablePadding key={i.text}>
              <ListItemButton>
                <ListItemText
                  primaryTypographyProps={{
                    color: "black",
                    fontSize: ".9rem",
                    marginLeft: "2rem",
                    fontWeight: "600",
                  }}
                  primary={i.text}
                />
              </ListItemButton>
            </ListItem>{" "}
            <Divider />
          </>
        ))}
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primaryTypographyProps={{
              color: "black",
              fontSize: ".9rem",
              marginLeft: "2rem",
              fontWeight: "600",
            }}
            primary="More"
          />
          <ArrowDropDown sx={{ color: "var(--main)" }} />
        </ListItemButton>
        <Collapse in={open1} timeout="4sec" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, width: 200 }}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: ".9em",
                  marginLeft: "1.4rem",
                }}
                primary="Surgeries domain"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, width: 200 }}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: ".9em",
                  marginLeft: "1.4rem",
                }}
                primary="Intesive care"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List>
        {arrauth.map((i, index) => (
          <>
            <ListItem
              disablePadding
              style={{ textAlign: "center", color: "brown" }}
              key={i.text}
            >
              <ListItemButton>
                <ListItemText
                  primaryTypographyProps={{
                    color: "brown",
                    fontSize: ".9rem",
                    marginLeft: "1.6rem",
                    fontWeight: "600",
                  }}
                  primary={i.text}
                />
              </ListItemButton>
            </ListItem>{" "}
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        style={{
          zIndex: "99",
          position: "fixed",
          top: "0",
          right: ".9rem",
          color: "var(--main)",
        }}
        onClick={toggleDrawer("right", true)}
      >
        <ListIcon style={{ fontSize: "2.1rem" }} />
      </IconButton>
      <Drawer
        style={{ overflowX: "hidden" }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
