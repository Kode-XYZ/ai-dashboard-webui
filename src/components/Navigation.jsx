import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['Dashboard', 'Options', 'APIs', 'Models', 'Training'];

  return (
    <nav className="flex space-x-2 p-2 bg-purple-900/30 backdrop-blur-md rounded-lg shadow-lg">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={activeTab === tab ? "secondary" : "ghost"}
          onClick={() => setActiveTab(tab)}
          className="text-white hover:text-lime-300 transition-colors"
        >
          {tab}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;