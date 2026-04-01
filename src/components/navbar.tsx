import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">Devbrath</span>
        <span className="freelance-badge">Available for Freelance</span>
      </div>
      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;