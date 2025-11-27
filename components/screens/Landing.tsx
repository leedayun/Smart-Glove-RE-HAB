import React from 'react';
import { Hand } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-white px-4">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="p-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg mb-6">
            <Hand className="text-white h-16 w-16" strokeWidth={1.5} />
          </div>
          <h1 className="text-[#111518] tracking-tight text-[32px] font-bold leading-tight text-center">
            Smart Rehab Glove
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-8 items-center w-full max-w-md mx-auto">
        <button
          onClick={onLogin}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-[#2b9dee] text-white text-base font-bold tracking-[0.015em] transition active:scale-95"
        >
          Log In
        </button>
        <button
          onClick={onLogin} // For demo purposes, both go to Home
          className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-[#f0f3f4] text-[#111518] text-base font-bold tracking-[0.015em] transition active:scale-95"
        >
          Sign Up
        </button>
        
        <div className="flex flex-row items-center justify-center gap-3 py-4">
          <div className="h-2 w-2 rounded-full bg-[#111518]"></div>
          <div className="h-2 w-2 rounded-full bg-[#dbe1e6]"></div>
          <div className="h-2 w-2 rounded-full bg-[#dbe1e6]"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;