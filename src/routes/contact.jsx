import { NavLink } from "react-router-dom";

export default function App() {
    return (
    <div>
        <h2>Contact</h2>

        {/* navigation */}
        <nav>
            <NavLink className="nav-link" to="/">Home</NavLink> 
            <NavLink className="nav-link" to="/about">About</NavLink> 
            <NavLink className="nav-link" to="/projects">Projects</NavLink> 
            <NavLink className="nav-link" to="/contact">Contact</NavLink> 
        </nav>
        <a className="emaillink" href="mailto:jliu421@myseneca.com">Say Hi!:)</a>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia elit ac lobortis vestibulum. Integer sed mauris vitae velit auctor feugiat. Nunc rutrum fringilla nisi fermentum elementum. Quisque fringilla dolor nec sem viverra, vel elementum odio blandit. Morbi dignissim consequat odio, sed semper odio bibendum vitae. Donec sodales velit mauris, eget pellentesque leo fermentum ac. Vestibulum condimentum eleifend urna sed vestibulum. Donec consequat orci vel arcu rutrum, at finibus metus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Integer placerat varius mollis. Vivamus eget purus vitae felis molestie pulvinar non non diam. Mauris commodo euismod volutpat. Maecenas quis aliquam tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam faucibus nisl nec ullamcorper rhoncus. In hac habitasse platea dictumst. Etiam scelerisque, nibh quis lobortis gravida, erat leo gravida purus, vitae lacinia felis tellus sit amet risus. Cras ut sollicitudin turpis, quis malesuada purus. Integer non dignissim dolor. Aenean molestie euismod lectus in luctus. Mauris porta ipsum finibus lorem eleifend, eget porttitor ante ultricies. Duis blandit malesuada metus in euismod. Morbi in risus turpis. Nam et justo vel nulla feugiat varius et nec tellus.

Pellentesque a tempus turpis. Vivamus leo ante, elementum in enim ac, volutpat molestie orci. Mauris condimentum egestas neque, a cursus enim consectetur id. Phasellus auctor, ante vitae viverra aliquet, mauris libero euismod odio, vitae pulvinar dui urna quis lectus. Aenean quis eleifend magna. Integer scelerisque pretium tortor et tristique. Etiam felis leo, consequat bibendum porta id, maximus ac risus. Nam aliquam lectus a imperdiet fermentum. Nullam egestas neque odio, in interdum mauris ultricies nec. Sed eu tincidunt leo, ac consequat leo. Suspendisse ac sapien sit amet velit ullamcorper ornare. Maecenas ac magna rutrum, suscipit ante quis, ullamcorper quam. Maecenas porta tincidunt nisl, ac imperdiet tellus suscipit non. Aliquam justo ipsum, eleifend in cursus vitae, aliquam ut purus. 
        </p>

    </div>
  );
}