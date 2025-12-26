import portfolioData from '../data/portfolio';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-800 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">{skills.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.categories?.map((category, idx) => (
            <div key={idx} className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.items?.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
