import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./About.scss";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const eduvariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const Matter = window.Matter;
    const $ = window.$;
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    function runMatter() {
      // module aliases
      const Engine = Matter.Engine,
        Events = Matter.Events,
        Runner = Matter.Runner,
        Render = Matter.Render,
        World = Matter.World,
        Body = Matter.Body,
        Mouse = Matter.Mouse,
        Common = Matter.Common,
        Bodies = Matter.Bodies;

      // create engine
      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      // create renderer
      const render = Render.create({
        element: canvasRef.current,
        engine: engine,
        options: {
          showVelocity: false,
          width: dimensions.width,
          height: dimensions.height,
          wireframes: false,
          background: "transparent",
        },
      });

      // create runner
      const runner = Runner.create();

      // create demo scene
      const world = engine.world;
      world.gravity.scale = 0;

      // create a body with an attractor
      const attractiveBody = Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
        {
          render: {
            fillStyle: "#000",
            strokeStyle: "#000",
            lineWidth: 0,
          },
          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      // add some bodies that to be attracted
      for (let i = 0; i < 60; i += 1) {
        const x = Common.random(0, render.options.width);
        const y = Common.random(0, render.options.height);
        const s =
          Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        const poligonNumber = Common.random(3, 6);

        let body = Bodies.polygon(x, y, poligonNumber, s, {
          mass: s / 20,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: "#222222",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        World.add(world, body);

        const r = Common.random(0, 1);
        let circle = Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? "#27292d" : "#444444",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        World.add(world, circle);

        circle = Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? "#334443" : "#222222",
            strokeStyle: "#111111",
            lineWidth: 4,
          },
        });

        World.add(world, circle);

        circle = Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: "#191919",
            strokeStyle: "#111111",
            lineWidth: 3,
          },
        });

        World.add(world, circle);
      }

      // add mouse control
      const mouse = Mouse.create(render.canvas);

      Events.on(engine, "afterUpdate", function () {
        if (!mouse.position.x) return;
        // smoothly move the attractor body towards the mouse
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      // return a context for MatterDemo to control
      const data = {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        },
        play: function () {
          Matter.Runner.run(runner, engine);
          Matter.Render.run(render);
        },
      };

      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
      return data;
    }

    function debounce(func, wait, immediate) {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function setWindowSize() {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;

      m.render.canvas.width = window.innerWidth;
      m.render.canvas.height = window.innerHeight;
      return dimensions;
    }

    const m = runMatter();
    setWindowSize();
    window.addEventListener("resize", debounce(setWindowSize, 250));

    return () => {
      m.stop();
      window.removeEventListener("resize", debounce(setWindowSize, 250));
    };
  }, []);

  return (
    <>
      <motion.div
        className="about-me"
        initial="initial"
        whileInView="animate"
        variants={variants}
      >
        <motion.header
          className="about-me-header"
          initial="initial"
          whileInView="animate"
          variants={variants}
        >
          <h1>About Me</h1>
        </motion.header>
        <motion.div
          className="about-me-introduction"
          initial="initial"
          whileInView="animate"
          variants={variants}
        >
          <ul>
            <li>
              I am a Full Stack Web Developer with a passion for creating
              dynamic and responsive web applications. I have a strong
              background in both frontend and backend technologies, dedicated to
              developing high-quality solutions that enhance user experiences
              and solve real-world problems.
            </li>
            <li>
              I possess a solid understanding of data structures and algorithms
              (DSA), and I am proficient in languages such as C and Python.
            </li>
            <li>
              I actively participate in competitive programming on Codeforces,
              which helps me sharpen my problem-solving skills.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="about-me-education"
          initial="initial"
          whileInView="animate"
          variants={eduvariants}
        >
          <h2>Education</h2>
          <ul>
            <li>
              I completed my schooling at Jh Ambani School, Surat, where I
              developed a strong foundation in mathematics and science, sparking
              my interest in technology and programming. I then completed my
              higher secondary education at RMG Maheshwari School.
            </li>
            <li>
              I am pursuing my undergraduate studies at the LNM Institute of
              Information Technology, working towards a BTech degree in Computer
              Science and Engineering.
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div id="wrapper-canvas" ref={canvasRef}></div>
    </>
  );
};

export default About;
