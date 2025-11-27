import React from 'react';
import { Settings, Bluetooth, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { Screen } from '../../types';

interface HomeProps {
  navigate: (screen: Screen) => void;
}

const data = [
  { name: 'Mon', score: 40 },
  { name: 'Tue', score: 65 },
  { name: 'Wed', score: 55 },
  { name: 'Thu', score: 80 },
  { name: 'Fri', score: 50 },
  { name: 'Sat', score: 95 },
  { name: 'Sun', score: 85 },
];

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col pb-4">
      {/* Header */}
      <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <h2 className="text-[#0d161b] text-lg font-bold flex-1 text-center pl-12">Home</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-[#0d161b]">
            <Settings size={24} />
          </button>
        </div>
      </div>

      {/* User Info */}
      <div className="flex p-4 gap-4 items-center">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 shrink-0"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIRVyiIG1-eW58jHghQXxg32bJKd5gLe9Qgkp30k5iNd7gtB6U8ifcDD5iRfaOrthLSUXdsljNx9IaeJpxNFOwn5gskQHLrPm11CV46Lp21SG9TXv8Og0Ei0VtSKYpNcRjlqXYpC0WZ-S6xnhcau-q1DyugECnnSj8J4AwezWIVmd651PVSXOpigN8IqRhzuq7ZnATfisQYTec5YpxFio6vwLAa1J4sA605hZDqr32bTNuP-9zMkuGZHtZoO7QtnFPljhmipWM92w")',
          }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0d161b] text-[22px] font-bold leading-tight">Ethan Carter</p>
          <p className="text-[#4c799a] text-base">Patient ID: 12345</p>
        </div>
      </div>

      {/* Connection Status */}
      <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
        <p className="text-[#0d161b] text-base truncate">Connected: Glove Active</p>
        <Bluetooth size={24} className="text-[#0d161b]" />
      </div>

      {/* Daily Summary */}
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-col gap-1 flex-[2]">
            <p className="text-[#0d161b] text-base font-bold leading-tight">Daily Training Summary</p>
            <p className="text-[#4c799a] text-sm leading-normal">
              Session Duration: 30 min | Repetitions: 150 | Avg. Strength: 75%
            </p>
          </div>
          <div
            className="w-full bg-center bg-no-repeat bg-cover rounded-lg flex-1 min-h-[80px]"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpKh8sEYGugmkpqeFjQCu7pXW7xhBvsslAtjN2BZ3ttXBwubFFF7ECXeC2bJqZl8DFbDxyxwn2B4p3x-3VicFARE3W5AzFa36Tz77Tq3ZNsLCvKJ4XOHanUN-olSbHYah9rKNLxfqQETtpkvfpTohmzR375amt5eTHcbCQdKAQMcc13p-2DBngCZRDIzpR-ym6BhCBasvDQ94aejLyyveqBdWeeMnmvQDYNkA3VJMV8r0UiVzUaDFa3-KjsHzehdG3XYKajnhHmS4")',
            }}
          ></div>
        </div>
      </div>

      {/* Weekly Score Chart */}
      <div className="flex flex-col gap-2 px-4 py-4">
        <p className="text-[#0d161b] text-base font-medium">Weekly Training Score</p>
        <p className="text-[#0d161b] text-[32px] font-bold leading-tight">85</p>
        <div className="flex gap-1 mb-2">
          <p className="text-[#4c799a] text-base">Last 7 Days</p>
          <p className="text-[#078838] text-base font-medium">+10%</p>
        </div>

        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2b9dee" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2b9dee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip cursor={false} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#4c799a"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorScore)"
              />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#4c799a', fontSize: 13, fontWeight: 'bold' }} 
                dy={10}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex px-4 py-3">
        <button
          onClick={() => navigate(Screen.TRAINING)}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-[#2b9dee] text-slate-50 text-base font-bold shadow-sm active:scale-[0.98] transition-transform"
        >
          Start New Session
        </button>
      </div>
    </div>
  );
};

export default Home;