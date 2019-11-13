import React, { useEffect, useState, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef();
  const width = window.innerWidth;
  const height = window.innerHeight;
  //====== State ======
  let [mouse, setMouse] = useState({ x: undefined, y: undefined });

  //keep track of xy position of mouse
  const onMouseMove = event => {
    setMouse({ x: event.x, y: event.y });
  };
  // refresh canvas on screen resize
  const onResize = (canvas, context) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(context); // call draw/animate functions on resize
  };

  
 
  // ============== useEffect holds all your activity ==============
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    window.addEventListener("resize", () => onResize(canvas, context));
    window.addEventListener("mousemove", e => onMouseMove(e));
    canvas.width = width;
    canvas.height = height;

    // call your drawing/animating functions here
    init(context);
  }, []);

  const init = context => {
    // draw black dot in middle of screen
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
