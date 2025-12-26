import portfolioData from '../data/portfolio';

export const About = () => {
  const { about } = portfolioData;
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">{about.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
            {about.paragraphs?.map((para, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}
            <div className="pt-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">What I Do</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                {about.highlights?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <div className="w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl shadow-blue-500/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};