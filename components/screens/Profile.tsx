import React from 'react';
import { ArrowLeft, Users, ChevronRight, Bluetooth, Bell, Globe, ShieldCheck } from 'lucide-react';
import { Screen } from '../../types';

interface ProfileProps {
  navigate: (screen: Screen) => void;
}

const Profile: React.FC<ProfileProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col pb-4">
      {/* Header */}
      <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
        <button onClick={() => navigate(Screen.HOME)} className="text-[#0d161b]">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-[#0d161b] text-lg font-bold flex-1 text-center pr-6">Profile</h2>
      </div>

      {/* User Details */}
      <div className="flex flex-col items-center p-6 gap-3">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 shadow-sm"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCT_HFaiuH_QpbPcMJAowu8wKN9HHlqXFtjWkkXuIduN0FyEJQAUocksyEQIGuv6-6foP7JDoOkToozYl5NTUrKY_q6TetaRS1JVK-11IqoTOspPrAgNNZshQSaUR2OJ950u_KgKyy1-nqrmvsa9dKsuCW5xwK1aqaOzUc3knxFB0e95X4rzZbkcnhIA3HRxTjwnjGFJzbmi3cOoIue26KFjfKy1j4GnAEpPImU0GpYXBCsSNX0FreZ2Urg1PtLiMrEFEHX0kGqdnI")',
          }}
        ></div>
        <div className="text-center">
          <h2 className="text-[#0d161b] text-[22px] font-bold">Ethan Carter</h2>
          <p className="text-[#4c799a] text-base">Wrist Fracture</p>
          <p className="text-[#4c799a] text-base">Dominant Hand: Right</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-2">
        <h3 className="text-[#0d161b] text-[22px] font-bold mb-4">Progress Overview</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Total Sessions', value: '25' },
            { label: 'Streak Days', value: '14' },
            { label: 'Avg. Improvement', value: '18%' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2 rounded-lg p-4 border border-[#cfdde7] bg-white text-center sm:text-left">
              <p className="text-[#0d161b] text-sm sm:text-base font-medium leading-tight">{stat.label}</p>
              <p className="text-[#0d161b] text-xl sm:text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Items */}
      <div className="px-4 mt-4">
        <div className="flex items-center gap-4 py-3 border-b border-transparent">
          <div className="flex items-center justify-center rounded-lg bg-[#e7eef3] h-10 w-10">
            <Users size={20} className="text-[#0d161b]" />
          </div>
          <p className="text-[#0d161b] text-base flex-1">Connect with Therapist</p>
          <ChevronRight size={24} className="text-[#0d161b]" />
        </div>
      </div>

      <div className="px-4 mt-6">
        <h3 className="text-[#0d161b] text-[22px] font-bold mb-4">Settings</h3>
        <div className="flex flex-col gap-2">
          <SettingItem icon={<Bluetooth size={20} />} title="Device Pairing" subtitle="Paired" />
          <SettingItem icon={<Bell size={20} />} title="Notifications" />
          <SettingItem icon={<Globe size={20} />} title="Language" />
          <SettingItem icon={<ShieldCheck size={20} />} title="Privacy & Data Export" />
        </div>
      </div>
    </div>
  );
};

const SettingItem = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) => (
  <div className="flex items-center gap-4 py-3">
    <div className="flex items-center justify-center rounded-lg bg-[#e7eef3] h-10 w-10 text-[#0d161b]">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-[#0d161b] text-base font-medium">{title}</p>
      {subtitle && <p className="text-[#4c799a] text-sm">{subtitle}</p>}
    </div>
    <ChevronRight size={24} className="text-[#0d161b]" />
  </div>
);

export default Profile;