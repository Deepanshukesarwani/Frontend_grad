"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="GradHub Logo" width={120} height={40} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col items-center py-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
