import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I focus on myself, learning new technology to grow.
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Technology</motion.b> and
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Expertise</motion.b>.
          </h1>
          <button>WHAT I LEARNED?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          I have lots of expertise in the field, and initially I learned HTML and CSS in a short period of time. After that, I learned about BootSrap 4.5.
          Then I will directly jump to JavaScript; it takes more time because of the DSA concept and function.
          </p>
          <a>
          <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Framework/Tools</h2>
          <p>
          I've built this using MERN stack, which means MONGO, EXPRESS, REACT & NODE.
          BACKEND: Node.js with Express.js,Mongo DB with Mongoose
          </p>
          <a href="https://www.geeksforgeeks.org/mern-stack/">
          <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
          For Designing Canva and Figma are two widely used design tools, each with its own unique strengths and capabilities.
          I am certified Cisco grafic disigner 
          </p>
          <a>
          <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Interest</h2>
          <p>
          My interest is in learning AI and automation technology, which I will implement in future projects and company projects.That's why I am learing about Generative AI </p>
          <a>
          <button>Go</button>
          </a>        
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
