import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "fernandezvalentin";

  const projectImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="work" className="py-20 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="mb-20">
          <div className="max-w-xl text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-6"></div>
          </div>

          {/* GitHub Bar inspired by reference */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="github-bar"
          >
            <span>Github</span>
            <Github size={20} />
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} className="flex flex-col gap-6 animate-pulse">
                  <div className="monitor-area" />
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-20">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-5 group"
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={1500}
                    gyroscope={true}
                    className="monitor-area"
                  >
                    <div className="w-[85%] relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                      <div className="bg-[#fdfdfd] p-1.5 rounded-t-lg relative">
                        <div className="w-full aspect-video bg-black rounded-sm overflow-hidden text-black">
                          <img 
                            src={projectImages[index % projectImages.length]} 
                            alt={repo.name} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="h-5 bg-[#e0e0e0] rounded-b-lg flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#666] rounded-full"></div>
                      </div>
                      <div className="w-9 h-3 bg-[#c0c0c0] mx-auto -mt-[1px] rounded-b-[4px]"></div>
                    </div>
                  </Tilt>

                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="text-[1.15rem] font-semibold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                    
                    <div className="flex gap-4 items-center">
                      <a 
                        href={repo.homepage || repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-[0.85rem] font-bold inline-flex items-center gap-1 hover:text-white transition-colors"
                      >
                        Demo <ArrowRight size={14} />
                      </a>
                      
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-[0.85rem] font-bold inline-flex items-center gap-1 hover:text-white transition-colors"
                      >
                        Repo <Github size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <a 
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                Ver más en GitHub
                <Github size={18} className="group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
