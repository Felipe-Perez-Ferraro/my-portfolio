import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import portfolio from '../../assets/portfolio.png';
import capstone from '../../assets/capstone.png';
import math from '../../assets/math.png';
import bookstore from '../../assets/bookstore.png';

const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    live: "https://felipe-perez-ferraro.github.io/PortfolioWebsite-Microverse/",
    code: "https://github.com/Felipe-Perez-Ferraro/PortfolioWebsite-Microverse",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    img: portfolio,
  },
  {
    id: 2,
    title: "Capstone Project",
    live: "https://felipe-perez-ferraro.github.io/Capstone-Project/",
    code: "https://github.com/Felipe-Perez-Ferraro/Capstone-Project",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    img: capstone,
  },
  {
    id: 3,
    title: "Math Magicians",
    live: "https://math-magicians-3jh3.onrender.com/",
    code: "https://github.com/Felipe-Perez-Ferraro/math-magicians",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    img: math,
  },
  {
    id: 4,
    title: "Bookstore",
    live: "https://bookstore-qo0d.onrender.com/",
    code: "https://github.com/Felipe-Perez-Ferraro/bookstore",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    img: bookstore,
  },
];

export const elements = [];

projects.map((el) => {
  elements.push(
    <article key={el.id} className="projects__container">
      <motion.div
        className="projectContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="features__container">
          <h2 className="features__title">{el.title}</h2>
          <img src={el.img} alt="" className="features__img" />
          <ul className="features__list__container">
            <li className="features__list__item">{el.html}</li>
            <li className="features__list__item">{el.css}</li>
            <li className="features__list__item">{el.javascript}</li>
            <li className="features__list__item">{el.react}</li>
          </ul>
        </div>

        <div className="linksContainer">
          <a
            href={el.live}
            target="_blank"
            title="See Live"
            className="projectLink"
          >
            <p className="projectLinkDesc">See Live</p>
            <FaShareSquare />
          </a>
          <a
            href={el.code}
            target="_blank"
            title="See Code"
            className="projectLink"
          >
            <p className="projectLinkDesc">See Code</p>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </article>
  );
});
