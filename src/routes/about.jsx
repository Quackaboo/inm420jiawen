import { NavLink } from "react-router-dom";
export default function About() {
    return (
        <main>
            <h2>About me</h2>
            <nav>
                <NavLink className="nav-link" to="/">Home</NavLink> 
                <NavLink className="nav-link" to="/about">About</NavLink> 
                <NavLink className="nav-link" to="/projects">Projects</NavLink> 
                <NavLink className="nav-link" to="/contact">Contact</NavLink> 
            </nav>
            <p className="smallfocus">(focus)</p>
            <p>Passionate about the new challenges and using methodologies to create delightful designs.</p>
        </main>
      

      
    );
  }

  