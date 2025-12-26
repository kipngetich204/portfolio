import { useState } from 'react';
import portfolioData from '../data/portfolio';

export const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! (This is a demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-800 px-4 sm:px-6">
      <div className="max-w-2xl sm:max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">{contact.title}</h2>
        <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 sm:p-8">
          <p className="text-gray-300 text-center mb-8 text-sm sm:text-base">
            {contact.description}
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium text-sm sm:text-base">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm sm:text-base"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium shadow-lg shadow-blue-500/30 text-sm sm:text-base"
            >
              {contact.submitLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
