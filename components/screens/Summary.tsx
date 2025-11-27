import React from 'react';
import { X, Check } from 'lucide-react';
import { Screen } from '../../types';

interface SummaryProps {
  navigate: (screen: Screen) => void;
}

const Summary: React.FC<SummaryProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col min-h-full bg-[#111b22] text-white">
      {/* Header */}
      <div className="flex items-center p-4 justify-between">
        <button onClick={() => navigate(Screen.HOME)} className="text-white hover:opacity-80">
          <X size={24} />
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-6">Session Summary</h2>
      </div>

      <div className="px-4 pt-4 pb-6 text-center">
        <h1 className="text-[28px] font-bold mb-6">Great work today!</h1>
        
        <div className="bg-[#233948] rounded-xl p-6 text-left border border-[#2f4b5f] shadow-lg">
          <p className="text-gray-300 text-sm font-medium uppercase tracking-wider mb-1">Total Score</p>
          <p className="text-4xl font-bold text-white">85</p>
        </div>
      </div>

      <div className="px-4 pb-6">
        <h2 className="text-xl font-bold mb-4">Completed Tasks</h2>
        <div className="flex flex-col gap-1">
          <TaskItem name="Finger Extension" />
          <TaskItem name="Grip Strength" />
          <TaskItem name="Wrist Rotation" />
        </div>
      </div>

      <div className="px-4 pb-8">
        <h2 className="text-xl font-bold mb-4">Accuracy Breakdown</h2>
        <div className="flex flex-col gap-3">
           <AccuracyRow label="Overall" value="+15%" isOverall />
           <AccuracyRow label="Thumb" value="+10%" />
           <AccuracyRow label="Index Finger" value="+12%" />
           <AccuracyRow label="Middle Finger" value="+18%" />
           <AccuracyRow label="Ring Finger" value="+15%" />
           <AccuracyRow label="Pinky Finger" value="+20%" />
        </div>
      </div>

      <div className="px-4 mt-auto pb-8 flex flex-col gap-3">
        <button
          onClick={() => navigate(Screen.HOME)}
          className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 bg-[#42a8f0] text-[#111b22] text-base font-bold transition active:scale-[0.98]"
        >
          Save and Return to Dashboard
        </button>
        <button
          onClick={() => navigate(Screen.TRAINING)}
          className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 bg-[#233948] text-white border border-[#2f4b5f] text-base font-bold transition active:scale-[0.98]"
        >
          Repeat Training
        </button>
      </div>
    </div>
  );
};

const TaskItem = ({ name }: { name: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-[#233948] last:border-0">
    <span className="text-base text-gray-200">{name}</span>
    <div className="bg-[#078838] rounded-full p-1">
      <Check size={16} className="text-white" />
    </div>
  </div>
);

const AccuracyRow = ({ label, value, isOverall }: { label: string; value: string; isOverall?: boolean }) => (
  <div className={`flex items-center justify-between py-2 ${isOverall ? 'mb-2' : ''}`}>
    <span className={`text-base ${isOverall ? 'font-bold text-white' : 'text-gray-400'}`}>{label}</span>
    <span className={`text-base font-medium ${isOverall ? 'text-[#42a8f0]' : 'text-gray-200'}`}>{value}</span>
  </div>
);

export default Summary;