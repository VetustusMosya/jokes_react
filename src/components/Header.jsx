import React from "react";
import LogoRsc from "../assets/logo2.png";

export default function Header() {
  return (
    <header style={{ background: "#a8dadc" }}>
      <div className="container">
        <img src={LogoRsc} style={{ height: "100px" }} alt="Dasl Eall" />
        <h1 style={{ color: "#1D3557" }}>Dasl Eall</h1>
        <nav>
          <a href="#">Joke Feed</a>
          <a href="#">Storage</a>
        </nav>
      </div>
    </header>
  );
}
