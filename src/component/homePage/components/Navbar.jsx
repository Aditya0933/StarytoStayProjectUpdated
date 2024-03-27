import React, { useState, useEffect } from 'react';
import { FaMusic } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white ${
        scrolling ? 'sticky' : ''
      }`}
    >
      <div className='flex items-center'>
        <h2 onClick={handleNav} className={`website-name ${logo ? 'hidden' : 'block'}`}>
          StrayToStay
        </h2>
      </div>
      <ul className='hidden md:flex text-white'>
        <li>🏠 Home</li>
        <li>🐾 Adopt</li>
        <li>🛠️ Services</li>
        <li>🌟 About Us</li>
        <li>💌 Contact</li>
      </ul>
      <div className='hidden md:flex flex gap-3'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? (
          <AiOutlineClose className='text-black' size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>StrayToStay.</h1>
          <li className='border-b'>🏠 Home</li>
          <li className='border-b'>🐾 Adopt</li>
          <li className='border-b'>🛠️ Services</li>
          <li className='border-b'>🌟 About Us</li>
          <li className='border-b'>💌 Contact</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
