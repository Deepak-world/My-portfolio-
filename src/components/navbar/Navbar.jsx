import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
      <motion.span
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <span style={{ position: "absolute", left: "90px", top: "30px" }}>DEEPAK DEV</span>
</motion.span>

        <div className="social">
          <a href="https://www.linkedin.com/in/deepak-dash-9b3445244/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/l__.deepak.dash.__l/?hl=en">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://github.com/Deepak-world">
            <img src="/Git-hub.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
