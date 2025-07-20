import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      <Blog />
    </div>
  );
}

export default App; 