import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolio';

export const Footer = () => {
  const { footer, social } = portfolioData;
  return (
    <footer className="bg-gray-950 text-white py-6 sm:py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            {footer.copyright}
          </p>
          <div className="flex gap-4 sm:gap-6">
            {social?.map((s) => (
              <a key={s.platform} href={s.url} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noreferrer">
                {(() => {
                  switch (s.platform) {
                    case 'github':
                      return <Github size={20} className="sm:w-6 sm:h-6" />;
                    case 'linkedin':
                      return <Linkedin size={20} className="sm:w-6 sm:h-6" />;
                    case 'email':
                      return <Mail size={20} className="sm:w-6 sm:h-6" />;
                    default:
                      return null;
                  }
                })()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};