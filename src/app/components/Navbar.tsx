"use client"; 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from "../assets/Vox Logo (White).svg"
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
    //   console.log(currentScrollPos);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${visible ? 'flex' : 'hidden'}bg-black secondary-font fixed w-[100vw] items-center mt-4 shadow-lg transition duration-500 ease-in-out border-[#225ac140] flex justify-evenly ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
        
    
    <Image src={logo}  alt='logo' className='w-[6%] aspect-auto'/>
  
      <div className=''>
       
        {/* <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isOpen} onChange={toggleMenu} />
        <label htmlFor="menu-toggle" className="menu-icon" /> */}
        <ul className={`nav-menu ${isOpen ? 'open' : ''} flex gap-8 items-center justify-center`}>
          <li className='nav-item'>
            <Link href='/home' passHref onClick={toggleMenu}>
         About
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/home' passHref onClick={toggleMenu}>
          Reviews
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/home' passHref onClick={toggleMenu}>
         Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/home' passHref onClick={toggleMenu}>
        FAQs
            </Link>
          </li>
        </ul>
      </div>
      <button className="shine-btn rounded-full border-2 px-3 py-1 border-[#3d3d3d6c]" >
               Contact Us
                    </button>    </nav>
  );
};

export default Navbar;
