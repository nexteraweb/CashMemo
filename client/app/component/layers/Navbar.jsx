"use client";
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbHomeFilled } from "react-icons/tb";
import { MdHistoryEdu } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";


const Navbar = () => {
  let router 
  try{
    router = useRouter();
  }catch(error){
    router = null
  }

  const navLinks = [
    { href: '/cash', label: "Home", icon: <TbHomeFilled /> },
    { href: '/history', label: 'History', icon: <MdHistoryEdu /> },
    { href: '/clientdata', label: 'Your Store', icon: <FaStoreAlt /> },
    { href: '/about', label: 'Profile', icon: <ImProfile /> },
  ];

  return (
    <div className="relative py-2 bg-gray-100 shadow-md">
      <Container className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo font-bold text-xl text-gray-700">Logo</div>

        {/* Navigation Links */}
        <ul
          className="flex space-x-10 items-center"
          role="navigation"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  router?.pathname === link.href // Safe access to pathname
                    ? 'text-orange-500 underline'
                    : 'text-gray-700 font-medium'
                } hover:text-orange-400 transition duration-300 flex items-center gap-x-2`}
              >
                 {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link
          href="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Button
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
