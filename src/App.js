import { NavLink } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h2>Oh hi!</h2>

            {/* navigation */}
            <nav>
                <NavLink className="nav-link" to="/">Home</NavLink> 
                <NavLink className="nav-link" to="/about">About</NavLink> 
                <NavLink className="nav-link" to="/projects">Projects</NavLink> 
                <NavLink className="nav-link" to="/contact">Contact</NavLink> 
            </nav>

            {/* intro */}
            <h2>Jiawen is a Graphic Designer based in Toronto, Canada. Passionate about creating designs that resonate with people, ranging from Branding, Illustration and Digital Experiences. </h2>
        </div>
  );
}