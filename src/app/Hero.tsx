
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=400')" }}>
            <div className="p-10">
                <h1 className="text-5xl font-bold text-orange-600 mb-4 animate-slideIn">
                    Hello, I am Parveen Jatoi
                </h1>
                <p className="text-3xl mb-8 animate-moveText whitespace-nowrap">
                    A Passionate Web Developer
                </p>
                <Link href="/Projects" className="relative inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full transition-transform duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400 overflow-hidden">
                        View My Work
                        <span className="absolute inset-0 bg-orange-500 transform -skew-x-15 transition-all duration-400 -translate-x-full group-hover:translate-x-full"></span>
                    
                </Link>
            </div>
        </div>
    );
};

export default Hero;