import React from 'react';
import { X } from 'lucide-react';
import portfolioData from '../data/portfolio';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { personal } = portfolioData;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Scrollable container for mobile */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6 sm:py-10">
        <div className="w-full max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow-2xl shadow-blue-500/20 overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700 flex-shrink-0">
            <h2 className="text-xl sm:text-2xl font-bold text-white truncate">Profile</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-2"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
            {/* Profile Image */}
            <div className="flex justify-center flex-shrink-0">
              <div className="relative">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-24 sm:w-32 h-24 sm:h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/30"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 break-words">{personal.name}</h3>
              <p className="text-blue-400 font-medium mb-2 text-sm sm:text-base">{personal.title}</p>
              <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-1">
                📍 <span className="truncate">{personal.location}</span>
              </p>
            </div>

            {/* Hobbies Section */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Hobbies & Interests</h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {personal.hobbies?.map((hobby, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-2 sm:p-3 hover:border-blue-400 transition-colors"
                  >
                    <p className="text-gray-300 text-xs sm:text-sm font-medium text-center line-clamp-2">{hobby}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Close Button - Fixed at bottom */}
          <div className="p-4 sm:p-6 border-t border-gray-700 flex-shrink-0 bg-gray-900">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-2.5 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
