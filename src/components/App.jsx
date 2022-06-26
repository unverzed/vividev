import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/aboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about-me" element={<AboutMe />}></Route>
                    <Route path="/experience" element={<Experience />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
    )
}