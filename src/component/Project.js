import React from 'react';
import img1 from "../Project-img/project-1.jpg"
import img2 from "../Project-img/project-2.jpg"
import img3 from "../Project-img/project-3.jpg"
const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{color:"#fff"}}>Projects</h2>
      <div className="project-list">
      {/* <img src={background} alt='background'/> */}
        <div className="project">
        <img src={img1} alt="Project 1" />
        <a href="https://react-movie-search-00hm.onrender.com"><h3>Movie-search</h3></a>
          <p>Movie search app using fetch Api...</p>
        </div>
        <div className="project">
          <img src={img2} alt="Project 2" />
          <a href="https://react-todo-app-qsiz.onrender.com"><h3>Todo-App</h3></a>
          <p>Todo app using React...</p>
        </div>
        <div className="project">
          <img src={img3} alt="Project 3" />
          <a href='https://ecpense-tracker.onrender.com'><h3>Expense-Tracker</h3></a>
          <p>Expense tracker using React...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;