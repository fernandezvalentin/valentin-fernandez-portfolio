import { motion } from 'framer-motion';
import { Shield, Zap, Layout, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Layout size={20} />, name: "Frontend", tools: ["React", "Next.js", "Tailwind"] },
    { icon: <Terminal size={20} />, name: "Backend", tools: ["Node.js", "Python", "SQL"] },
    { icon: <Zap size={20} />, name: "Mobile", tools: ["React Native", "Expo"] },
    { icon: <Shield size={20} />, name: "Cloud", tools: ["AWS", "Vercel", "Firebase"] }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-3 mb-8">
              <span className="badge">3 Años Exp.</span>
              <span className="badge">12+ Proyectos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
              Pasión por el <span className="gradient-text italic">diseño</span> <br />
              y la arquitectura limpia.
            </h2>
            
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Me enfoco en crear soluciones que no solo funcionen, sino que también deleiten al usuario. 
              Mi enfoque combina el rigor técnico del backend con la sutileza estética del frontend moderno.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 glass group">
                <div className="text-primary text-3xl font-bold mb-1 tracking-tighter">20+</div>
                <div className="text-xs uppercase font-bold tracking-widest text-white/30 group-hover:text-primary transition-colors">Clientes</div>
              </div>
              <div className="p-6 glass group">
                <div className="text-secondary text-3xl font-bold mb-1 tracking-tighter">100%</div>
                <div className="text-xs uppercase font-bold tracking-widest text-white/30 group-hover:text-secondary transition-colors">Calidad</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 glass flex flex-col gap-4 relative"
              >
                <div className="text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map(tool => (
                    <span key={tool} className="text-[10px] py-1 px-2 bg-white/5 border border-white/5 rounded text-white/40">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
