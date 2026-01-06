import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full py-6 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md py-4 border-b border-white/5' : ''}`}>
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter z-50">
          valentin<span className="text-primary italic">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex gap-4 items-center pl-4 border-l border-white/10">
            <a href="https://github.com/fernandezvalentin" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/valentinfernandezm/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 bg-[#030305]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex gap-8 pt-8 border-t border-white/10 w-40 justify-center">
                <a href="https://github.com/fernandezvalentin" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors scale-125">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/valentinfernandezm/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors scale-125">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
