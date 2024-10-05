import React from 'react';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-background/30 backdrop-blur-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        <h1 className="text-2xl font-bold text-lime-300">Multimodal Assistant Hub</h1>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`text-lime-300 border-lime-300 hover:bg-lime-300 hover:text-purple-900 transition-colors ${
          theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100'
        }`}
      >
        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </Button>
    </header>
  );
};

export default Header;