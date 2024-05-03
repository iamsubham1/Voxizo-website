"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from "../assets/Vox Logo (White).svg"
import Image from 'next/image';
import { MdMenu, MdOutlineClose } from "react-icons/md";

import '../css/navbar.css';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);


  //navbar behaviour
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


  //hamburger menu fn
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className={`bg-black secondary-font w-[100vw] items-center navbar shadow-lg transition duration-500 ease-in-out border-[#225ac140] flex justify-between px-10 ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>

      <Image src={logo} alt='logo' className='logo aspect-auto' />

      {isMobileMenuOpen ? <MdMenu className={'text-3xl cursor-pointer self-center hamburger '} onClick={toggleMobileMenu} /> : <MdOutlineClose className={'text-3xl cursor-pointer self-center hamburger'} onClick={toggleMobileMenu} />}
      <div className='middle-sec hide-list'>


        <ul className={`nav-menu flex gap-8 items-center justify-center`}>
          <li className='nav-item'>
            <Link href='/' passHref >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about' passHref >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='#service' passHref >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/home' passHref >
              Tech
            </Link>
          </li>
        </ul>


      </div>
      <button className="shine-btn rounded-full border-2 px-3 py-[0.2rem] hide-list border-[#3d3d3d6c]" >
        Contact Us
      </button>


      {
        !isMobileMenuOpen ? (
          <div className="mobile-menu text-black" style={{ animationName: !isMobileMenuOpen ? 'slidein' : 'slideout' }}>
            <ul>
              <li className='flex items-center cursor-pointer w-full h-[6vh]'>


              </li>

              <li><div className='w-full h-[6vh] text-4xl flex items-center p-4 gap-2'>
              </div></li>

              <li> <Link href="/login" className='flex w-full h-[6vh]  p-4 items-center gap-2 text-4xl'><span className='text-lg'><p>Logout</p></span>
              </Link></li>
            </ul>
          </div>
        ) : (<></>)
      }

    </nav>
  );
};

export default Navbar;
