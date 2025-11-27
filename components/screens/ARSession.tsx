import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Screen } from '../../types';

interface ARSessionProps {
  navigate: (screen: Screen) => void;
}

const ARSession: React.FC<ARSessionProps> = ({ navigate }) => {
  const [sessionTime, setSessionTime] = useState(0);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
        {/* Header */}
      <div className="flex items-center p-4 justify-between bg-white z-10">
        <button onClick={() => navigate(Screen.SUMMARY)} className="text-[#111518]">
          <X size={24} />
        </button>
        <h2 className="text-[#111518] text-lg font-bold flex-1 text-center pr-6">AR Session</h2>
      </div>

      {/* AR Viewport */}
      <div className="relative w-full aspect-[3/4] @container">
         <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
            backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxsH40w6g2kuvvkzs5edWHTqZu6IkbMW1E8_G8LpZMxakoAiIF445jlgSjJ7QKqUX04D2DJkB9L_ZPlfzO4k0FIISv45RHhyAI-yTqAy6rRwCeDg_hKyigF-pxtI9yvU_qRbFNR8JkDz3qY-HYXk_uFj9xu9boAhnlNgdZkN9QXM56SYPC5mW8bet-4G2HwIDUkhAK8Gi30AhIOMyqtfqDJUefEIVWTbsCjBuiaU604K0np87_Dd0jYthYlg3R_xaSsVWIWNSa1gc")',
            }}
        ></div>
        
        {/* Overlay Instruction */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
            <div className="bg-[#e0f2fe]/90 backdrop-blur-md rounded-lg py-3 px-5 shadow-lg border border-[#bae6fd]">
                <p className="text-center text-base font-semibold text-[#0c4a6e]">
                    Squeeze your hand as firmly as you can.
                </p>
            </div>
        </div>
      </div>

      {/* Live Stats Table */}
      <div className="flex-1 px-4 pt-4 bg-white overflow-y-auto">
        <div className="flex justify-between items-center text-[#6e787e] text-sm font-semibold leading-tight pb-3">
            <span className="w-1/3">Metric</span>
            <span className="w-1/3 text-center">Current</span>
            <span className="w-1/3 text-right">Goal</span>
        </div>
        
        <StatRow label="Score" current="85" goal="100" />
        <StatRow label="Grasps" current="15" goal="20" />
        <StatRow label="Accuracy" current="92%" goal="100%" />
        <StatRow label="Grip Force" current="7.5 N" goal="10 N" />
        <StatRow label="AI Assist" current="Level 3" goal="Level 5" />
        <StatRow label="Time" current={formatTime(sessionTime)} goal="00:10:00" />
      </div>

       {/* Finish Button (Optional for demo flow) */}
       <div className="p-4 bg-white border-t border-slate-100">
          <button 
            onClick={() => navigate(Screen.SUMMARY)}
            className="w-full bg-red-500 text-white font-bold py-3 rounded-xl active:scale-[0.98] transition-transform"
          >
            End Session
          </button>
       </div>
    </div>
  );
};

const StatRow = ({ label, current, goal }: { label: string, current: string, goal: string }) => (
    <div className="flex justify-between items-center text-[#111518] text-base font-normal leading-normal py-3 border-b border-[#f0f3f4] last:border-0">
        <span className="w-1/3 font-medium">{label}</span>
        <span className="w-1/3 text-center font-bold text-[#2b9dee]">{current}</span>
        <span className="w-1/3 text-right text-slate-500">{goal}</span>
    </div>
);

export default ARSession;