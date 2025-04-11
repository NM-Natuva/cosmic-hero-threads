
import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNavLinks: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link to="/" className="nav-link group">Home</Link>
      <Link to="/men" className="nav-link group">Men</Link>
      <Link to="/women" className="nav-link group">Women</Link>
      <Link to="/collections" className="nav-link group">Collections</Link>
      <Link to="/themes" className="nav-link group">Themes</Link>
      <Link to="/membership" className="nav-link group">Membership</Link>
    </div>
  );
};

export default DesktopNavLinks;
