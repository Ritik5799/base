import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 My Website | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
