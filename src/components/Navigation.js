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
      <div className="sound-icon">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          class="on"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.1"
            cx="15"
            cy="15"
            r="14.5"
            stroke="#000000"
            fill="none"
          ></circle>
          <path
            d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364"
            stroke="#000000"
            strokeLinecap="round"
            fill="none"
          ></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
