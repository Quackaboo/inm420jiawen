import { NavLink } from "react-router-dom";

export default function Projects() {
    return (
        <main>
            <h2>Selected Projects</h2>
            <nav>
                <NavLink className="nav-link" to="/">Home</NavLink> 
                <NavLink className="nav-link" to="/about">About</NavLink> 
                <NavLink className="nav-link" to="/projects">Projects</NavLink> 
                <NavLink className="nav-link" to="/contact">Contact</NavLink> 
            </nav>
            <div className="project-list">
                <div className="project1">Project 1</div>
                <div className="project2">Project 2</div>
                <div className="project3">Project 3</div>
            </div>
        </main>
    );
  }