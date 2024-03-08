import { fabric } from "fabric";
import { useLayoutEffect } from "react";

const ShirtCanvas = () => {
  const initCanvas = (id) => {
    return new fabric.Canvas(id, {
      height: 350,
      width: 350,
      selection: false,
      backgroundColor: "grey",
    });
  };

  const setBackground = (url, canvas) => {
    fabric.Image.fromURL(url, (img) => {
      canvas.backgroundImage = img;
      canvas.requestRenderAll();
    });
  };

  const setPanEvents = (canvas) => {
    let mousePressed = false;
    canvas.on("mouse:move", (event) => {
      if (mousePressed) {
        canvas.setCursor("grab");
        const mEvent = event.e;
        const delta = new fabric.Point(mEvent.movementX, mEvent.movementY);
        canvas.relativePan(delta);
      }
    });
    canvas.on("mouse:down", () => {
      mousePressed = true;
      canvas.setCursor("grab");
    });
    canvas.on("mouse:up", () => {
      mousePressed = false;
      canvas.setCursor("default");
    });
  };

  useLayoutEffect(() => {
    const canvas = initCanvas("shirtCanvas");
    setBackground("./textures/1.png", canvas);

    setPanEvents(canvas);
  }, []);

  return <canvas id="shirtCanvas" />;
};

export default ShirtCanvas;
