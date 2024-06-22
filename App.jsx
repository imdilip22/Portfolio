import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import Skills from "./src/components/Skills";
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Education from './src/components/Education';
import "react-vertical-timeline-component/style.min.css";


document.body.style.fontFamily="system-ui"

const root=document.getElementById("root");

ReactDOM.createRoot(root).render(
    <>
    <Header></Header>
    <Home></Home>
    <Skills></Skills>
    <Education></Education>
    <Projects></Projects>
    <Contact></Contact>

    </>
)