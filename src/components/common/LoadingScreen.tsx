import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen = ({ isVisible }: LoadingScreenProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ${
        isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
