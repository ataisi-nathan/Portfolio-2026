import { FaCode, FaCss3, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa6";


const Hero = () => {
    return(
        <div className="hero">
            <div className="text-center">
                <h2>Dashboard</h2>
                <p>Plan, prioritize, and accomplish your task with ease.</p>
                <div className="charts">
                    <div className="chart one">
                        <p>Projects Completed</p>
                        <h3>4</h3>
                    </div>
                    <div className="chart two">
                        <p>Skills Mastered</p>
                        <h3>7</h3>
                    </div>
                    <div className="chart three">
                        <p>Years of Exp</p>
                        <h3>6+</h3>
                    </div>
                    <div className="chart four">
                        <p>Clients Reached</p>
                        <h3>4</h3>
                    </div>
                    <div className="chart five">
                        <p className="chart-five">Recent Projects</p>
                        <ul className="chart-five-list">
                            <li>Ecommerce Store</li>
                            <li>Hotel Management System</li>
                            <li>School Management System(MVP)</li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                    <div className="chart six">
                        <p className="skill-text">Skills</p>
                        <div className="skills">
                            <div className="icon">
                                <FaCode fontSize={65}/>
                                <p>TypeScript</p>
                            </div>
                            <div className="icon">
                                <FaReact fontSize={65}/>
                                <p>React JS</p>
                            </div>
                            <div className="icon">
                                <FaSass fontSize={65}/>
                                <p>Sass</p>
                            </div>
                            <div className="icon">
                                <FaJs fontSize={65}/>
                                <p>JavaScript</p>
                            </div>
                            <div className="icon">
                                <FaHtml5 fontSize={65}/>
                                <p>HTML5</p>
                            </div>
                            <div className="icon">
                                <FaCss3 fontSize={65}/>
                                <p>CSS3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;