import React, { useState } from "react";
import { styles } from "./styles.js";
function Avatar(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{ ...styles.avatarHello, ...{ opacity: hovered ? "1" : "0" } }}
      >
        Medical Projects Support
      </div>
      <div
        onClick={() => props.onClick && props.onClick()}
        className="transition-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "1px solid brown" : "2px solid brown" },
        }}
      />
    </div>
  );
}

export default Avatar;
