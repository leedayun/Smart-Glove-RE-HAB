import React, { useState } from 'react';
import { ArrowLeft, GripHorizontal } from 'lucide-react';
import { Screen } from '../../types';

interface TrainingProps {
  navigate: (screen: Screen) => void;
}

const Training: React.FC<TrainingProps> = ({ navigate }) => {
  const [difficulty, setDifficulty] = useState(50);

  return (
    <div className="flex flex-col pb-4">
      {/* Header */}
      <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <button onClick={() => navigate(Screen.HOME)} className="text-[#0d161b]">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#0d161b] text-lg font-bold flex-1 text-center pr-6">Training</h2>
      </div>

      <h2 className="text-[#0d161b] text-[22px] font-bold px-4 py-4">Current Training Mode</h2>

      <div className="flex items-center gap-4 px-4 py-2">
        <div className="flex items-center justify-center rounded-lg bg-[#e7eef3] h-12 w-12 text-[#0d161b]">
          <GripHorizontal size={24} />
        </div>
        <div>
          <p className="text-[#0d161b] text-base font-medium">Mode</p>
          <p className="text-[#4c799a] text-sm">Basic Finger Flexibility</p>
        </div>
      </div>

      <div className="px-4 py-4">
        <button
          onClick={() => navigate(Screen.CALIBRATION)}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-[#2b9dee] text-slate-50 text-base font-bold shadow-sm active:scale-[0.98] transition-transform"
        >
          Enter AR Session
        </button>
      </div>

      <p className="text-[#0d161b] text-base px-4 pb-4">
        Immerse yourself in interactive AR exercises designed to enhance hand function and dexterity.
      </p>

      <h2 className="text-[#0d161b] text-[22px] font-bold px-4 py-4">Difficulty</h2>
      
      <div className="px-4">
        <div className="flex justify-between items-center mb-2">
            <span className="text-[#0d161b] text-base font-medium">Adjust motor resistance</span>
            <span className="text-[#0d161b] text-sm">{difficulty > 70 ? 'Hard' : difficulty > 30 ? 'Intermediate' : 'Easy'}</span>
        </div>
        <input 
            type="range" 
            min="0" 
            max="100" 
            value={difficulty} 
            onChange={(e) => setDifficulty(Number(e.target.value))}
            className="w-full h-2 bg-[#cfdde7] rounded-lg appearance-none cursor-pointer accent-[#2b9dee]"
        />
      </div>

      <h2 className="text-[#0d161b] text-[22px] font-bold px-4 pt-8 pb-4">Real-time Feedback</h2>
      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-[#cfdde7] bg-white">
          <p className="text-[#0d161b] text-base font-medium">Grip Force</p>
          <p className="text-[#0d161b] text-2xl font-bold">75%</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-[#cfdde7] bg-white">
          <p className="text-[#0d161b] text-base font-medium">Hand Angle</p>
          <p className="text-[#0d161b] text-2xl font-bold">30°</p>
        </div>
      </div>
    </div>
  );
};

export default Training;