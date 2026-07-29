import "./App.css";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import Home from "./components/HOME/Home";
import About from "./components/ABOUT/About";
import Skills from "./components/SKILLS/Skills";
import MyWork from "./components/MYWORK/Mywork";
import Projects from "./components/PROJECTS/Projects";
import Footer from "./components/FOOTER/Footer";




import Contact from "./contactMe/Contact";

function HomePage() {
  return (
    <SplashScreen>
      <ThemeToggle />

      <Home />
      
      <div className="h-20"></div>

      <About />

      <div className="h-20"></div>

      <Projects />

      <div className="h-20"></div>

      <MyWork />

      <div className="h-20"></div>

      <Skills />

      <div className="h-20"></div>
     

      <Footer />

    </SplashScreen>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;