import React from 'react';
import './App.css'; 
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComponent from './Components/particles';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Bottombar from './Components/Bottombar';
import { BrowserRouter } from 'react-router-dom';
import Projects1 from './Components/Projects/Projects1';
import NewFile from './Components/Projects/NewFile';
import Acheivement1 from './Components/Acheivement1';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <ParticlesComponent id='particles' />
          <Header />
          <About />
          <Skills />
          <Experience />
          <div className="container project-container my-5">
            <div className="row head">
              <div className="col">Projects</div>
            </div>
            <Projects />
            <Projects1 />
            <NewFile />
          </div>

          <div
            className="container achievements-container my-5"
          >
            <div className="row head ">
              <div className="col ">Achievements & Certifications</div>
            </div>
            <Achievements />
            <Acheivement1 />
          </div>
          {/* <Achievements /> */}
          <Contact />
          <Bottombar />

        </div>

      </BrowserRouter>
  );
}

export default App;
