import {Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>AN</h2>
            <ul>
                <Link to="/"><li>Dashboard</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/skills"><li>Skills</li></Link>
                <Link to="/experience"><li>Experience</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;