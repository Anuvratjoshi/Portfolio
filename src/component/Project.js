import React from 'react';
const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{color:"#fff"}}>Projects</h2>
      <div className="project-list">
      {/* <img src={background} alt='background'/> */}
        <div className="project">
          <img src="https://via.placeholder.com/150" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/150" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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