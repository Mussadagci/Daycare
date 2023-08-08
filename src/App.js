import App from './App';
import './index.css';
import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import Enrollment from './components/Enrollment';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#enrollment">Enrollment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="enrollment">
        <Enrollment />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <SocialMedia />
      </footer>
    </div>
  );
}

export default App;
