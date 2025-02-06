"use client"

import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Essaouira Live</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Crafts
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Events
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            About
          </a>
        </nav>
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-800">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-800">
            Crafts
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-800">
            Events
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-800">
            About
          </a>
        </div>
      )}
    </header>
  )
}

export default Header

