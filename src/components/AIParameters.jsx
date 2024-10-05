import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const AIParameters = () => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Temperature</label>
        <Slider defaultValue={[0.7]} max={1} step={0.1} />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Top P</label>
        <Slider defaultValue={[0.9]} max={1} step={0.1} />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Max Tokens</label>
        <Input type="number" defaultValue={2048} className="bg-purple-800/50 text-white" />
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="use-beam-search" />
        <label htmlFor="use-beam-search" className="text-sm font-medium text-lime-300">
          Use Beam Search
        </label>
      </div>
      {/* Add more parameters as needed */}
    </div>
  );
};

export default AIParameters;