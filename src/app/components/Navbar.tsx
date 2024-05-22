"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from "../assets/Vox Logo (White).svg"
import Image from 'next/image';
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { usePathname } from 'next/navigation'; // Changed import to usePathname
import '../css/navbar.css';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  //navbar scroll behaviour
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  //hamburger menu function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-black secondary-font w-[100vw] items-center navbar shadow-lg transition duration-500 ease-in-out border-[#225ac140] flex justify-between px-10 ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>

      <Image src={logo} alt='logo' className='logo aspect-auto' />

      {isMobileMenuOpen ? <MdMenu className={'text-3xl cursor-pointer self-center hamburger '} onClick={toggleMobileMenu} /> : <MdOutlineClose className={'text-3xl cursor-pointer self-center hamburger'} onClick={toggleMobileMenu} />}
      <div className='middle-sec hide-list'>

        <ul className={`nav-menu flex gap-8 items-center justify-center`}>
          <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <Link href='/' passHref >
              Home
            </Link>
          </li>
          <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
            <Link href='/about' passHref >
              About Us
            </Link>
          </li>
          <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
            <Link href='/#service' passHref >
              Services
            </Link>
          </li>
          <li className={`nav-item ${pathname === '/home' ? 'active' : ''}`}>
            <Link href='/tech' passHref >
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
          <>
            <div className="mobile-menu text-black py-8 px-5" style={{ animationName: !isMobileMenuOpen ? 'slidein' : 'slideout' }}>
              <ul className={`nav-menu flex flex-col gap-8 text-[2em] items-start justify-center`}>
                <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                  <Link href='/' passHref onClick={() => setIsMobileMenuOpen(true)} >
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
                  <Link href='/about' passHref onClick={() => setIsMobileMenuOpen(true)} >
                    About Us
                  </Link>
                </li>
                <li className={`nav-item ${pathname === '/#service' ? 'active' : ''}`}>
                  <Link href='/services' passHref onClick={() => setIsMobileMenuOpen(true)} >
                    Services
                  </Link>
                </li>
                <li className={`nav-item ${pathname === '/home' ? 'active' : ''}`}>
                  <Link href='/home' passHref onClick={() => setIsMobileMenuOpen(true)} >
                    Tech
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (<></>)
      }
    </nav >
  );
};

export default Navbar;
