import React, { useState } from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">Thirtysixstudio</div>
      <div className="theme-toggle">
        <span className="sun">☀</span>
      </div>
      <ul className="nav-links">
        {["What we do", "Who we are", "How we give back", "Talk to us"].map(
          (item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
      <div className="menu-icon">••••</div>
    </nav>
  );
};

export default Navigation;
