import React from 'react';
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <h1 className="text-2xl font-bold">Multimodal Assistant</h1>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </Button>
    </header>
  );
};

export default Header;