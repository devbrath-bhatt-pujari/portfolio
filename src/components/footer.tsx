import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3>Let's Connect</h3>
        <p>Currently open to freelance opportunities and technical collaborations.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/devbrathbhattpujari" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:devbrathbhattpujari@gmail.com"><FaEnvelope /></a>
        </div>
        <div className="footer-bottom">
            <p>Devbrath Bhatt Pujari <br/>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;