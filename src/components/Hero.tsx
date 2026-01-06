import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">Disponible para nuevos proyectos</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            Frontend Web Developer <br /> 
            <span className="gradient-text italic">| Web Designer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
          >
            Especializado en crear experiencias digitales de alta gama. <br className="hidden md:block" />
            Fusiono la precisión del desarrollo con la sutileza del diseño moderno.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a href="#work" className="btn-primary group">
              Ver Proyectos 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Contactar
            </a>
          </motion.div>

          {/* Floating Elements decoration */}
          <div className="hidden lg:block">
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -left-10 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md opacity-20"
             >
               <Code2 size={32} className="text-primary" />
             </motion.div>
             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-40 -right-10 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md opacity-20"
             >
               <Rocket size={32} className="text-secondary" />
             </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative localized glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20" />
    </section>
  );
};

export default Hero;
