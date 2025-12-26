import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../data/portfolio';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">{projects.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.items?.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <div className={`h-40 sm:h-48 ${project.gradient}`}></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, techIdx) => (
                    <span key={techIdx} className="bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm sm:text-base">
                  {project.links?.github && (
                    <a href={project.links.github} className="text-blue-400 hover:text-blue-300 flex items-center transition-colors" target="_blank" rel="noreferrer">
                      <Github size={18} className="mr-1" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                  {project.links?.demo && (
                    <a href={project.links.demo} className="text-blue-400 hover:text-blue-300 flex items-center transition-colors" target="_blank" rel="noreferrer">
                      <ExternalLink size={18} className="mr-1" />
                      <span className="hidden sm:inline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};