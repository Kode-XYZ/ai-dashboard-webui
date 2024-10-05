import React from 'react';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-background/30 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-lime-300">Multimodal Assistant Hub</h1>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="text-white hover:text-lime-300"
      >
        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </Button>
    </header>
  );
};

export default Header;