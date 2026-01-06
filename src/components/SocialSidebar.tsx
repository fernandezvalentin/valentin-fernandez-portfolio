import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-12 bottom-0 z-40 hidden lg:flex flex-col items-center gap-8"
    >
      <div className="flex flex-col gap-6">
        <a 
          href="https://github.com/fernandezvalentin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/30 hover:text-primary transition-all duration-300 hover:-translate-y-1"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/valentinfernandezm/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/30 hover:text-primary transition-all duration-300 hover:-translate-y-1"
        >
          <Linkedin size={20} />
        </a>
      </div>
      
      <div className="flex flex-col items-center gap-8">
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase whitespace-nowrap">
          SÍGUEME
        </span>
        <div className="w-px h-20 bg-white/10" />
      </div>
    </motion.div>
  );
};

export default SocialSidebar;
