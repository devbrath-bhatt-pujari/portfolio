import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Crafting Systems <br /> with Care & Logic</h1>
          <p className="subtitle">Systems Engineer | Full Stack Developer</p>
          <p className="intro">
            A warm welcome to my digital space. I’m a <span className="highlight">Systems Engineer</span> dedicated to building the invisible backbone of modern apps with <span className="highlight">Spring Boot</span>, while ensuring the user experience in <span className="highlight">React & TypeScript</span> remains intuitive and human-centric.
          </p>
          
          <div className="hero-buttons">
  {/* Option 1: Scroll to Projects */}
  <button 
    className="btn-primary" 
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  >
    View My Work
  </button>

  <a 
  href={`${process.env.PUBLIC_URL}/Devbrath_Resume.pdf`} 
  download 
  className="btn-resume"
>
  <FaFileDownload /> Resume
</a>

  {/* Option 2: Scroll to Footer or open Email */}
  <button 
  className="btn-secondary"
  onClick={() => window.location.href = 'mailto:devbrathbhattpujari@gmail.com?subject=Portfolio Inquiry'}
>
  Contact Me
</button>
</div>

        </div> {/* End of hero-content */}

        <div className="hero-image">
          <div className="image-wrapper">
            <div className="blob-shape"></div> 
            <div className="circle-frame">
              <img 
                src={`${process.env.PUBLIC_URL}/propic.png`} 
                alt="Devbrath Bhatt Pujari" 
                className="profile-photo" 
              />
            </div>
          </div>
        </div>
      </div> {/* End of hero-container */}
    </header>
  );
};

export default Hero;