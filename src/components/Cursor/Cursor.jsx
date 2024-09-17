import React, { useEffect, useState } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      circles.forEach((circle, index) => {
        const delay = index * 10;

        setTimeout(() => {
          circle.style.left = newPosition.x - 12 + "px";
          circle.style.top = newPosition.y - 12 + "px";

          // Apply scaling with transform
          const scale = (10 - index) / 10;
          circle.style.transform = `scale(${scale})`;
        }, delay);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </>
  );
};

export default Cursor;
