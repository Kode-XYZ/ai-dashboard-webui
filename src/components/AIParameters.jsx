import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Frequency Penalty</label>
        <Slider defaultValue={[0]} min={-2} max={2} step={0.1} />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Presence Penalty</label>
        <Slider defaultValue={[0]} min={-2} max={2} step={0.1} />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Stop Sequences</label>
        <Input type="text" placeholder="Enter stop sequences" className="bg-purple-800/50 text-white" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Sampling Method</label>
        <Select>
          <SelectTrigger className="w-full bg-purple-800/50 text-white">
            <SelectValue placeholder="Select sampling method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="greedy">Greedy</SelectItem>
            <SelectItem value="beam">Beam Search</SelectItem>
            <SelectItem value="nucleus">Nucleus Sampling</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="use-beam-search" />
        <label htmlFor="use-beam-search" className="text-sm font-medium text-lime-300">
          Use Beam Search
        </label>
      </div>
    </div>
  );
};

export default AIParameters;