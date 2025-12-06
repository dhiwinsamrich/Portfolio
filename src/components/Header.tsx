import React from 'react';
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

const Header = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: Mail },
    { name: 'Resume', url: '#resume', icon: FileText },
  ];

  return <NavBar items={navItems} />;
};

export default Header;

