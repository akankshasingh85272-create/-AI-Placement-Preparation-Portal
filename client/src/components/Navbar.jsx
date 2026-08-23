import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>🎯 AI Placement Preparation Portal</h2>
        
       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>Companies</li>

        <li>DSA</li>

        <li>Projects</li>

        <li>Profile</li>
      </ul>

        </nav>
    );
}

export default Navbar;