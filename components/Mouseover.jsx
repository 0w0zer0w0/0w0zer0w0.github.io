"use client";
import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mousemove
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Listen for mousemove event
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Update CSS custom properties for mouse position
    document.documentElement.style.setProperty(
      "--mouse-x",
      `${mousePosition.x}px`
    );
    document.documentElement.style.setProperty(
      "--mouse-y",
      `${mousePosition.y}px`
    );
  }, [mousePosition]);

  return null; // No need to render anything, this is a side-effect-only component
};

export default MouseFollower;
