import { FaHome, FaLaptopCode, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom";

const MobileNav = () => {
    return (
        <ul className="mobile-nav">
            <Link to="/"><li> <FaHome /> </li></Link>
            <Link to="/projects"><li> <FaCode /></li></Link>
            <Link to="/skills"><li> <FaLaptopCode /></li></Link>
            <Link to="/experience"><li> <FaBriefcase /></li></Link>
            <Link to="/contact"><li> <FaEnvelope /></li></Link>
        </ul>
    )
}

export default MobileNav;