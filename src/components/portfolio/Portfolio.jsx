import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Student Resources Portal",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "In this Web Site I implemented 3-4 feature for student. Student can use this website for Exam preparetion and interview also anathor Extra feature avalible like resume bulder, job portal links etc. Technology used: HBS, CSS, JavaScript, NodeJS, ExpressJS, MongoDB, RestFul-API for CRUD operation and for authentication JWT token are used" },
  {
    id: 2,
    title: "Accenture Website clone ",
    img: "pexels-designecologist-1779487.jpg",
    desc: "The technologies I used to build this clone were NextJS, Tailwind CSS, BootStrap, NodeJS, and Nodemon. When I am making this website, it's kind of hard to do the exact format and animation, but after that, I will easily do all sections." },
  {
    id: 3,
    title: "ReactJS App",
    img: "pexels-kevin-ku-577585.jpg",
    desc: "The Textutil React app can do text manipulations like spelling check, space adjustment, upper and lower case, and checking the frequency of words. All of these features are classified as function types. ",
  },
  {
    id: 4,
    title: "Library management system with Django",
    img: "pexels-polina-zimmerman-3747505.jpg",
    desc: "Used Technology:- HTML, CSS, JavaScript, Python, DJango, RestFul-API, SQL-Lite, some python packages",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://github.com/Deepak-world">
            <button>See Demo</button>
            </a>
          </motion.div>  
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
