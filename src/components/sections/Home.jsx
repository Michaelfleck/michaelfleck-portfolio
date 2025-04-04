import React, { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Thpace, ThpaceGL } from "thpace";

export const Home = () => {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);

    if (mounted === false) return;

    const setAnimatedBackground = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        console.error("Canvas element not found!");
        return;
      }

      if (!ThpaceGL) {
        console.error("ThpaceGL is not defined!");
        return;
      }

      ThpaceGL.create(canvas, {
        colors: ["#343333", "#030314", "#343333"],
        triangleSize: 130,
        particleSettings: {
          count: [10,20],
          radius: [0.5,1],
          opacity: [0.05, 0.5],
        }
      });

      console.log("ThpaceGL initialized!");
    }

    setAnimatedBackground()
  }, [mounted]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <div style={{ position: "fixed", inset: "0px", zIndex: 0 }}>
        <canvas
          ref={canvasRef}
          id="main-background"
          style={{ height: "100%", width: "100%" }}
        ></canvas>
      </div>
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Michael Fleck.
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            I'm a Front-End developer.
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a software developer who thrives on solving complex problems and
            building efficient, scalable systems. My goal is to create robust
            solutions that streamline workflows and enhance user experiences
            through clean, maintainable code.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className=" border border-blue500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
