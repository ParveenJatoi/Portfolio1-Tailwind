"use client"


import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-gray-800 p-5">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <h2 className="text-2xl font-bold text-yellow-500">
          Parveen Jatoi
        </h2>
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Services">Services</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
          <li><Link href="/Contact">Contact Us</Link></li>
        </ul>
       <Link href="/Resume"><button type="button" className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
          Download Resume
        </button>
        </Link>
      </nav>

      {/* Responsive menu for smaller screens */}
      <div className="md:hidden mt-4 flex flex-col space-y-4 items-center text-white text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  );
}