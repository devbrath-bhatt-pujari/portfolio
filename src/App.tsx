import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import TechStack from './components/techstack';
import Experience from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;