import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.jpg";
import fitlift from "../../assets/fitlift.png";
import snake from "../../assets/snake.png";
import calc from "../../assets/calc.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://chawkii-react-portfolio2.netlify.app/"
          h3="A Comprehensive Personal Portfolio"
          p="This portfolio showcases my projects and skills, built using React.js. It emphasizes responsiveness and user experience, highlighting my journey as a developer."
        />

        <ProjectCard
          src={freshBurger}
          link="https://chawkii-react-todo.netlify.app"
          h3="Todo List Using ReactJS"
          p="A simple Todo List app built with ReactJS. Users can easily add, edit, and delete tasks, with state management and local storage for data persistence. The clean interface ensures a smooth user experience."
        />

        <ProjectCard
          src={hipsster}
          link="https://bbroderie-confection.netlify.app/"
          h3="Embroidery Website"
          p="B.Broderie showcases custom embroidery services with a focus on quality craftsmanship and unique designs. Built with HTML, CSS, and JavaScript, this site emphasizes user experience and service offerings."
        />

        <ProjectCard
          src={fitlift}
          link="https://github.com/chawkiii/Shi-Fu-Mi"
          h3="Shi Fu Mi"
          p="Experience the classic game of Rock, Paper, Scissors, reimagined with engaging visuals and smooth gameplay."
        />

        <ProjectCard
          src={snake}
          link="https://github.com/chawkiii/snake_python"
          h3="Snake Game using Python"
          p="Experience the classic game of Snake, reimagined with engaging visuals and smooth gameplay."
        />
        <ProjectCard
          src={calc}
          link="https://chawkii-calculator.netlify.app/"
          h3="Simple Calculator"
          p="A functional calculator built using HTML, CSS, and JavaScript."
        />
      </div>
    </section>
  );
}

export default Projects;
