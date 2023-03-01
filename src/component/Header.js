import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">My Portfolio</div>
                <ul className="nav-links">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;