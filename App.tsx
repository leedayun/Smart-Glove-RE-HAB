import React, { useState } from 'react';
import { Screen } from './types';
import Landing from './components/screens/Landing';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Training from './components/screens/Training';
import Calibration from './components/screens/Calibration';
import ARLobby from './components/screens/ARLobby';
import ARSession from './components/screens/ARSession';
import Summary from './components/screens/Summary';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LANDING);

  // Helper to determine if we should show the bottom nav
  const showBottomNav = [Screen.HOME, Screen.PROFILE, Screen.TRAINING].includes(currentScreen);

  const navigate = (screen: Screen) => {
    window.scrollTo(0, 0);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LANDING:
        return <Landing onLogin={() => navigate(Screen.HOME)} />;
      case Screen.HOME:
        return <Home navigate={navigate} />;
      case Screen.PROFILE:
        return <Profile navigate={navigate} />;
      case Screen.TRAINING:
        return <Training navigate={navigate} />;
      case Screen.CALIBRATION:
        return <Calibration navigate={navigate} />;
      case Screen.AR_LOBBY:
        return <ARLobby navigate={navigate} />;
      case Screen.AR_SESSION:
        return <ARSession navigate={navigate} />;
      case Screen.SUMMARY:
        return <Summary navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-slate-50 overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {renderScreen()}
      </div>
      
      {showBottomNav && (
        <div className="absolute bottom-0 left-0 right-0 z-50">
          <BottomNav currentScreen={currentScreen} navigate={navigate} />
        </div>
      )}
    </div>
  );
}