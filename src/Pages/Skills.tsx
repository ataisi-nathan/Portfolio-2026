
import Card from "../components/Card";
import { FaHtml5, FaCss3, FaJs, FaCode, FaSass, FaNodeJs, FaReact } from "react-icons/fa6";


const Skills = () => {

    const skillsData = [
    {
        "id": 1,
        "title": "HTML 5",
        "description": <FaHtml5 />
    },{
        "id": 2,
        "title": "CSS 3",
        "description": <FaCss3 />
    },{
        "id": 3,
        "title": "JavaScript",
        "description": <FaJs />
    },{
        "id": 4,
        "title": "TypeScript",
        "description": <FaCode />
    },{
        "id": 5,
        "title": "Next JS",
        "description": <FaCode />
    },{
        "id": 6,
        "title": "Sass",
        "description": <FaSass />
    },{
        "id": 7,
        "title": "Tailwind Css",
        "description": <FaCode />
    },{
        "id": 8,
        "title": "Node JS",
        "description": <FaNodeJs />
    },{
        "id": 9,
        "title": "React JS",
        "description": <FaReact />
    }
]

    return (
        <div className="skills hero">
            <h2>Skills</h2>
            <div className="skills-container">
                {skillsData.map((skillsData) => (
                    <Card  
                        key={skillsData.id}
                        title={skillsData.title}
                        description={skillsData.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;