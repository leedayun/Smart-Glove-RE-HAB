import React from 'react';
import { X, Hand, Grip, ThumbsUp } from 'lucide-react';
import { Screen } from '../../types';

interface ARLobbyProps {
  navigate: (screen: Screen) => void;
}

const ARLobby: React.FC<ARLobbyProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="flex items-center p-4 justify-between">
        <button onClick={() => navigate(Screen.TRAINING)} className="text-[#0d161b]">
          <X size={24} />
        </button>
        <h2 className="text-[#0d161b] text-lg font-bold flex-1 text-center pr-6">AR Lobby</h2>
      </div>

      <div className="px-4">
         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm relative mb-4">
             <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxsH40w6g2kuvvkzs5edWHTqZu6IkbMW1E8_G8LpZMxakoAiIF445jlgSjJ7QKqUX04D2DJkB9L_ZPlfzO4k0FIISv45RHhyAI-yTqAy6rRwCeDg_hKyigF-pxtI9yvU_qRbFNR8JkDz3qY-HYXk_uFj9xu9boAhnlNgdZkN9QXM56SYPC5mW8bet-4G2HwIDUkhAK8Gi30AhIOMyqtfqDJUefEIVWTbsCjBuiaU604K0np87_Dd0jYthYlg3R_xaSsVWIWNSa1gc")',
              }}
            ></div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-[#0d161b] text-lg font-bold mb-2">Today's Training</h3>
        <p className="text-[#0d161b] mb-1">Grip Strength Training</p>
        <p className="text-[#4c799a] text-sm">Goal: Improve grip strength and dexterity</p>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-[#0d161b] text-lg font-bold mb-3">Calibration Checks</h3>
        
        <div className="flex flex-col gap-3">
          <CalibrationStep icon={<Hand size={20} />} label="Open Hand" />
          <CalibrationStep icon={<Grip size={20} />} label="Close Hand" />
          <CalibrationStep icon={<ThumbsUp size={20} />} label="Move Thumb" />
        </div>
        
        <p className="text-[#078838] text-sm font-medium mt-4 text-center">✓ Glove Connected & Calibrated</p>
      </div>

      <div className="px-4 mt-auto pb-6">
        <button
          onClick={() => navigate(Screen.AR_SESSION)}
          className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 bg-[#42a8f0] text-[#0d161b] text-base font-bold shadow-sm active:scale-[0.98] transition-transform"
        >
          Begin AR Session
        </button>
      </div>
    </div>
  );
};

const CalibrationStep = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-[#e7eef3]">
    <div className="text-[#0d161b] bg-[#e7eef3] p-2 rounded-lg">
      {icon}
    </div>
    <p className="text-[#0d161b] font-medium">{label}</p>
  </div>
);

export default ARLobby;