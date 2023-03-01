import React from 'react';
import { NavLink } from 'react-router-dom';
// import './About.css';

function About() {
    return (
        <section id="about">
            <NavLink to="/"><h4 id='home'>Home</h4></NavLink>
            <div className="container">
                <h2>About Me</h2>
                <div className="content">
                    <p>As a mechanical engineer with a passion for technology, I have developed a diverse set of skills that would be valuable to your company. My experience with HTML, CSS, Node.js, Express.js, basic Python, React.js, JavaScript, and MongoDB allows me to approach problems from a unique perspective and develop innovative solutions that deliver real results.</p>
                    <p>My expertise in mechanical engineering has taught me to think critically and logically, and to approach challenges with a systematic and data-driven mindset. I have honed my skills in project management, problem-solving, and communication, which have enabled me to collaborate effectively with cross-functional teams and deliver projects on time and within budget.</p>
                    <p>With my knowledge and experience, I am confident that I can bring value to your company. I am a quick learner and eager to take on new challenges, and I am committed to continuous learning and self-improvement.</p>
                </div>
            </div>
        </section>
    );
}

export default About;