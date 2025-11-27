import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Screen } from '../../types';

interface CalibrationProps {
  navigate: (screen: Screen) => void;
}

const Calibration: React.FC<CalibrationProps> = ({ navigate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate(Screen.AR_LOBBY), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <button onClick={() => navigate(Screen.TRAINING)} className="text-[#0d161b]">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#0d161b] text-lg font-bold flex-1 text-center pr-6">Smart Rehab Glove</h2>
      </div>

      <p className="text-[#4c799a] text-sm text-center pb-2">Connected</p>
      <p className="text-[#0d161b] text-base text-center px-8 pb-6">
        Follow the on-screen instructions to calibrate the glove with your hand movements.
      </p>

      <div className="flex-1 px-4 flex flex-col items-center">
        <div className="w-full max-w-sm aspect-[2/3] rounded-xl overflow-hidden shadow-sm relative">
             <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWkhnfqFqiqHn9zU6ZhHw33Biuw4sohS5RLcEo5EBFTA7Wuto2JvloOd29yXGshaMfuL-9nkUV8XKly9ONslGybagLNLHeshA-4LlLqaiJT6P1En2m7irfwhrQr7ODLDbpa88aNpqsWhJoEPTS2k36I6Ghp7CI3VncXSnRywp9dc3Vm-rHaQ2F9VyzFcpyAZzdPEM5rEao9PAXBxELDWEGXOlJAYlVZvZHW6B42Nk6HWEpHX9W0t1hHVuAJQTLW_5Y5LRHWaxopSM")',
              }}
            ></div>
            {/* Scanning effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2b9dee]/20 to-transparent animate-scan" style={{ height: '20%' }}></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between mb-2">
            <span className="text-[#0d161b] font-medium">Calibration Progress</span>
            <span className="text-[#4c799a] font-medium">{progress}%</span>
        </div>
        <div className="h-2 w-full bg-[#cfdde7] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#42a8f0] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { top: -20%; }
            100% { top: 120%; }
        }
        .animate-scan {
            animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Calibration;