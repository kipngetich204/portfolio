import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolio';
export const Hero = () => {
  const { personal, hero, social } = portfolioData;
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="animate-fade-in space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Hi, I'm <span className={`bg-clip-text text-transparent ${personal.avatar}`}>{personal.name}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            {personal.title}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            {hero.ctaButtons?.map((btn) => (
              <button
                key={btn.text}
                onClick={() => scrollToSection(btn.target)}
                className={btn.primary
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 text-sm sm:text-base'
                  : 'border-2 border-blue-500 text-blue-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-500/10 transition-all text-sm sm:text-base'}
              >
                {btn.text}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-4 sm:gap-6">
            {social?.map((s) => (
              <a key={s.platform} href={s.url} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noreferrer">
                {(() => {
                  switch (s.platform) {
                    case 'github':
                      return <Github size={24} className="sm:w-7 sm:h-7" />;
                    case 'linkedin':
                      return <Linkedin size={24} className="sm:w-7 sm:h-7" />;
                    case 'email':
                      return <Mail size={24} className="sm:w-7 sm:h-7" />;
                    default:
                      return null;
                  }
                })()}
              </a>
            ))}
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
};