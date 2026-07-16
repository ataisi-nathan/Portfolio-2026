import Contact from "../Pages/Contact";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Header from "./header";
import Hero from "./hero";
import { Route, Routes } from "react-router-dom";


const Container = () => {
  return (
    <div className="container">
        <Header />
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={ <Projects />} />
            <Route path="/skills" element={ <Skills /> } />
            <Route path="/experience" element={ <Experience />} />
            <Route path="/contact" element={ <Contact /> } />
        </Routes>
    </div>
    );
}

export default Container;