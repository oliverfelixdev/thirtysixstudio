import React from "react";
import useHover from "../utils/useHover";
import Button from "./Button";

const Footer = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <footer className="footer">
      <h1 className="title">
        Pssst. Looking for <br /> something spicy?
      </h1>
      <div className="footer-content">
        <p className="description">
          Find the floating adjuma pepper or click the big red button below to
          unlock our fiery alter ego. Be warned, it’s hot in there! Don’t forget
          to turn on your sound.
        </p>
        <Button ref={hoverRef}>BRING THE HEAT</Button>
      </div>
    </footer>
  );
};

export default Footer;
