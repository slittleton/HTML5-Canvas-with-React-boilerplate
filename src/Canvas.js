import React, { useEffect, useState, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef();
  // const width = window.innerWidth;
  // const height = window.innerHeight;
  //====== State ======
  let [mouse, setMouse] = useState({ x: undefined, y: undefined });
  let [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const { width, height } = screen;

  //keep track of xy position of mouse
  const onMouseMove = event => {
    setMouse({ x: event.x, y: event.y });
  };
  // refresh canvas on screen resize
  const onResize = context => {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    init(context); // call draw/animate functions on resize
  };

  useEffect(() => {}, []);
  // ============== useEffect holds all your activity ==============
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    window.addEventListener("resize", () => onResize(context));
    window.addEventListener("mousemove", e => onMouseMove(e));
    canvas.width = width;
    canvas.height = height;

    // call your drawing/animating functions here
    init(context);
  }, [width, height]);

  const init = context => {
    drawDot(context);
  };

  // draw black dot in middle of screen
  const drawDot = context => {
    context.beginPath();
    // context.arc(x-position, y-position, radius, startAngle, endAngle, drawCounterClockwise )
    context.arc(width / 2, height / 2, 50, 0, 2 * Math.PI, false);
    context.fill();
  };

  return (
    <div>
      <canvas
        width={width}
        height={height}
        ref={canvasRef}
        style={canvasStyle}
      />
    </div>
  );
};

const canvasStyle = {
  backgroundColor: "gray"
};

export default Canvas;
