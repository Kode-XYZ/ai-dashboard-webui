import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TrainingInterface = () => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Training Data</label>
        <Input type="file" className="bg-purple-800/50 text-white" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Epochs</label>
        <Input type="number" defaultValue={10} className="bg-purple-800/50 text-white" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Learning Rate</label>
        <Input type="number" defaultValue={0.001} step={0.0001} className="bg-purple-800/50 text-white" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Batch Size</label>
        <Input type="number" defaultValue={32} className="bg-purple-800/50 text-white" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Optimizer</label>
        <Select>
          <SelectTrigger className="w-full bg-purple-800/50 text-white">
            <SelectValue placeholder="Select optimizer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="adam">Adam</SelectItem>
            <SelectItem value="sgd">SGD</SelectItem>
            <SelectItem value="rmsprop">RMSprop</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Training Progress</label>
        <Progress value={33} className="bg-purple-800/50" />
      </div>
      <Button className="bg-lime-600 hover:bg-lime-500 text-white">Start Training</Button>
      <Button className="bg-red-600 hover:bg-red-500 text-white ml-2">Stop Training</Button>
    </div>
  );
};

export default TrainingInterface;