'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Admissions', href: '/#apply' },
    { name: 'News', href: '/#news' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-xs py-2 px-6 flex justify-between items-center">
        <span>Federal Government Educational Institutions (C/G)</span>
        <span>Mardan Cantt, KP</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo & Title */}
<div className="flex items-center space-x-3">
  <Link href="/">
    <Image 
      src="/logo.png" 
      alt="FG Boys Inter College Logo" 
      width={48} 
      height={48} 
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />
  </Link>
  <div>
    <h1 className="font-bold text-lg md:text-xl leading-none text-green-900">
      <Link href="/">FG Boys Inter College</Link>
    </h1>
    <span className="hidden sm:block text-xs md:text-sm text-gray-500 font-medium tracking-widest uppercase mt-1">
      Mardan Cantt. - KP
    </span>
  </div>
</div>
          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 font-semibold text-sm uppercase items-center">
            <ul className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-800 hover:text-green-700 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/staff-login" className="bg-green-700 text-white px-5 py-2 rounded shadow-lg hover:bg-green-800 transition">
              Staff Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-green-900 focus:outline-none hover:text-green-700 transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-[70] transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
          <span className="font-bold text-green-900 uppercase tracking-wider text-sm">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-red-600 transition">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto font-semibold uppercase text-sm">
          <ul className="flex flex-col space-y-4 mb-8">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 pb-2">
                <Link href={link.href} className="block text-green-800" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-gray-200">
            <a href="https://mail.google.com/a/fgbicm.edu.pk" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-700 text-white px-5 py-3 rounded shadow-md hover:bg-green-800 transition">
              Email Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}