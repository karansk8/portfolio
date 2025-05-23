
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { text: 'About', path: '/#about' },
    { text: 'Resume', path: '/#resume' },
    { text: 'Projects', path: '/#projects' },
    { text: 'Chat', path: '/#chat' },
    { text: 'Contact', path: '/#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-portfolio-dark-blue">Portfolio</Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path}
                className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          {/* Mobile Nav Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path}
                className="text-gray-700 hover:text-portfolio-blue transition-colors py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
