import React from 'react';
import logo  from '../../../public/logo.svg';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-black shadow">
      <div className="flex items-center gap-3">
        <Link to="/">
        <img src={logo} alt="DevEncode Logo" className="h-8 w-8" />
        </Link>
        <span className="text-xl font-bold text-white tracking-wide">DevEncode</span>
        
      </div>
    </nav>
  );
};

export default Nav;