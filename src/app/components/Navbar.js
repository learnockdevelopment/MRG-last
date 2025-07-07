'use client'; // Mark this as a Client Component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { text: "تواصل معنا", href: "/contact" },
    { text: "شركات المجموعة", href: "/companies" },
    { text: "النشرة", href: "/newsletter" },
    { text: "السيرة الذاتية", href: "/about" },
    { text: "الرئيسية", href: "/" },
  ];

  // Check if a nav item is active
  const isActive = (href) => {
    // Special case for home page
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-emerald-100 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                className="w-16 h-14 object-contain" 
                src="/mrgLogo.png" 
                alt="Company Logo" 
              />
            </Link>
          </div>
          
          {/* Navigation Items - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <NavItem 
                key={index} 
                text={item.text} 
                href={item.href}
                active={isActive(item.href)} 
              />
            ))}
          </nav>
          
          {/* Search Bar */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <SearchBar />
            
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - Hidden by default */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={index}
                text={item.text}
                href={item.href}
                active={isActive(item.href)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ text, href, active }) => (
  <Link 
    href={href}
    className={`relative group px-3 py-2 text-lg font-medium font-tajawal transition-colors duration-200 ${
      active ? 'text-green-700' : 'text-gray-700 hover:text-green-600'
    }`}
  >
    {text}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-700 rounded-full"></span>
    )}
    <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 rounded-full transition-all duration-300 ${
      active ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  </Link>
);

const MobileNavItem = ({ text, href, active }) => (
  <Link 
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium font-tajawal ${
      active ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
    }`}
  >
    {text}
  </Link>
);

const SearchBar = () => (
  <div className="relative w-48 md:w-56">
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg 
        className="w-5 h-5 text-blue-900" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="text"
      className="w-full h-10 pl-4 pr-10 text-right rounded-lg border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-base font-medium font-tajawal placeholder-gray-400"
      placeholder="البحث عن"
    />
  </div>
);

export default Navbar;