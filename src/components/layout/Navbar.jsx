import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import DemoRoleSwitcher from './DemoRoleSwitcher';

export const Navbar = () => {
  return (
    <header id="main-navbar" className="sticky top-0 z-40 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5E0D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Vision */}
        <Link to="/" className="group shrink-0">
          <Logo size="md" showTagline={true} />
        </Link>

        {/* Demo Experience Role Switcher (Primary Prototype Navigation) */}
        <div className="flex items-center gap-3">
          <DemoRoleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
