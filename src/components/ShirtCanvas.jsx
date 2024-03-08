import React, { useLayoutEffect } from "react";
import { fabric } from "fabric";

const ShirtCanvas = () => {
  const initCanvas = (id) => {
    return new fabric.Canvas(id, {
      height: 300,
      width: 300,
    });
  };

  const setBackground = (url, canvas) => {
    fabric.Image.fromURL(url, (img) => {
      canvas.backgroundImage = img;
      canvas.requestRenderAll();
    });
  };

  useLayoutEffect(() => {
    const canvas = initCanvas("shirtCanvas");
    setBackground("./textures/1.png", canvas);
  }, []);

  return <canvas id="shirtCanvas" />;
};

export default ShirtCanvas;
