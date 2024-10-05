import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex space-x-2 p-2 bg-background/30 backdrop-blur-md rounded-lg shadow-lg">
      <Button variant="ghost" className="text-white hover:text-lime-300 transition-colors">
        Dashboard
      </Button>
      <Button variant="ghost" className="text-white hover:text-lime-300 transition-colors">
        Options
      </Button>
      <Button variant="ghost" className="text-white hover:text-lime-300 transition-colors">
        APIs
      </Button>
      <Button variant="ghost" className="text-white hover:text-lime-300 transition-colors">
        Models
      </Button>
      <Button variant="ghost" className="text-white hover:text-lime-300 transition-colors">
        Training
      </Button>
    </nav>
  );
};

export default Navigation;