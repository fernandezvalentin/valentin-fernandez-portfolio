import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "fernandezvalentinm@gmail.com",
      link: "mailto:fernandezvalentinm@gmail.com"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+54 9 2342413823",
      link: "https://wa.me/5492342413823"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "valentinfernandezm",
      link: "https://www.linkedin.com/in/valentinfernandezm/"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Get in touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
          >
            ¿Hablamos sobre tu <span className="gradient-text italic">próximo</span> proyecto?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 leading-relaxed"
          >
            Siempre estoy abierto a discutir nuevas oportunidades, ideas creativas o colaboraciones. 
            Puedes encontrarme en cualquiera de estas plataformas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 glass group relative flex flex-col items-center text-center gap-6"
            >
              <div className="p-4 bg-white/5 rounded-2xl text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-bg-dark">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-white/30">{contact.label}</h3>
              </div>
              <ArrowUpRight size={20} className="absolute top-6 right-6 text-white/10 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-sm text-white/30 font-medium">
            © {new Date().getFullYear()} Valentin Fernandez. Todos los derechos reservados.
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/fernandezvalentin" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <Github size={16} /> Github
            </a>
            <a href="https://www.linkedin.com/in/valentinfernandezm/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
