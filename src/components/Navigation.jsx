import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex space-x-2 p-2 bg-purple-900/30 backdrop-blur-md rounded-lg shadow-3d-dark">
      <Button
        variant="ghost"
        className={`text-white hover:text-lime-300 transition-colors ${activeTab === 'chat' ? 'bg-purple-800/50 shadow-inner-glow' : ''}`}
        onClick={() => setActiveTab('chat')}
      >
        Chat
      </Button>
      <Button
        variant="ghost"
        className={`text-white hover:text-lime-300 transition-colors ${activeTab === 'dashboard' ? 'bg-purple-800/50 shadow-inner-glow' : ''}`}
        onClick={() => setActiveTab('dashboard')}
      >
        Dashboard
      </Button>
    </nav>
  );
};

export default Navigation;