
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Disable automatic CSS injection

// Footer.js or Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 font-sans">
      
      {/* Footer Main Content */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-4 py-6 space-y-8 lg:space-y-0 lg:flex-nowrap">
        
        {/* Follow Me Section */}
        <div className="flex-1 min-w-[200px] text-center">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Follow Me</h3>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="https://twitter.com/yourhandle" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-orange-500 transition duration-300" />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/yourhandle" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-orange-500 transition duration-300" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/yourhandle" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-orange-500 transition duration-300" />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/yourhandle" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-orange-500 transition duration-300" />
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Quick Links Section */}
        <div className="flex-1 min-w-[200px] text-center">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition duration-300">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition duration-300">About</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition duration-300">Services</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition duration-300">Contact</Link></li>
          </ul>
        </div>
        
        {/* Brand Section */}
        <div className="flex-1 min-w-[200px] text-center">
          <p className="text-gray-400">Creating value since 2024</p>
        </div>
      </div>
      
      {/* Footer Strip */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;