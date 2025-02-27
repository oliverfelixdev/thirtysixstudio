import React, { useEffect, useRef, useState } from "react";
import canvasImages from "../canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImages[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + `px`;
      canvas.style.height = canvas.offsetHeight + `px`;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [index]);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: zIndex,
      }}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
