import React from 'react';
import { House, Dumbbell, User } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, navigate }) => {
  const isActive = (screen: Screen) => currentScreen === screen;

  return (
    <div className="flex gap-2 border-t border-[#e7eef3] bg-slate-50 px-4 pb-6 pt-3 shadow-lg">
      <button
        onClick={() => navigate(Screen.HOME)}
        className={`flex flex-1 flex-col items-center justify-end gap-1 ${
          isActive(Screen.HOME) ? 'text-[#0d161b]' : 'text-[#4c799a]'
        }`}
      >
        <House
          size={24}
          fill={isActive(Screen.HOME) ? 'currentColor' : 'none'}
          className="h-6 w-6"
        />
        <span className="text-xs font-medium leading-normal tracking-[0.015em]">Home</span>
      </button>

      <button
        onClick={() => navigate(Screen.TRAINING)}
        className={`flex flex-1 flex-col items-center justify-end gap-1 ${
          isActive(Screen.TRAINING) ? 'text-[#0d161b]' : 'text-[#4c799a]'
        }`}
      >
        <Dumbbell
          size={24}
          fill={isActive(Screen.TRAINING) ? 'currentColor' : 'none'}
          className="h-6 w-6"
        />
        <span className="text-xs font-medium leading-normal tracking-[0.015em]">Training</span>
      </button>

      <button
        onClick={() => navigate(Screen.PROFILE)}
        className={`flex flex-1 flex-col items-center justify-end gap-1 ${
          isActive(Screen.PROFILE) ? 'text-[#0d161b]' : 'text-[#4c799a]'
        }`}
      >
        <User
          size={24}
          fill={isActive(Screen.PROFILE) ? 'currentColor' : 'none'}
          className="h-6 w-6"
        />
        <span className="text-xs font-medium leading-normal tracking-[0.015em]">Profile</span>
      </button>
    </div>
  );
};

export default BottomNav;