import React from 'react';
const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{color:"#fff"}}>Projects</h2>
      <div className="project-list">
      {/* <img src={background} alt='background'/> */}
        <div className="project">
        <a href="https://react-movie-search-00hm.onrender.com"><img src="https://via.placeholder.com/150" alt="Project 1" />
          <h3>Movie-search</h3></a>
          <p>Movie search app using fetch Api..</p>
        </div>
        <div className="project">
          <a href="https://react-todo-app-qsiz.onrender.com"><img src="https://via.placeholder.com/150" alt="Project 2" />
          <h3>Todo-App</h3></a>
          <p>Created todo app using React</p>
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/150" alt="Project 3" />
          <h3>Project 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;