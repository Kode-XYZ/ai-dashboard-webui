import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DatasetManager = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Upload Dataset</label>
        <Input type="file" className="bg-purple-800/50 text-white" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Dataset Format</label>
        <Select>
          <SelectTrigger className="w-full bg-purple-800/50 text-white">
            <SelectValue placeholder="Select dataset format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="csv">CSV</SelectItem>
            <SelectItem value="json">JSON</SelectItem>
            <SelectItem value="txt">TXT</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Preprocessing Steps</label>
        <Select>
          <SelectTrigger className="w-full bg-purple-800/50 text-white">
            <SelectValue placeholder="Select preprocessing steps" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tokenization">Tokenization</SelectItem>
            <SelectItem value="normalization">Normalization</SelectItem>
            <SelectItem value="augmentation">Data Augmentation</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="bg-lime-600 hover:bg-lime-500 text-white">Process Dataset</Button>
      <Button className="bg-purple-600 hover:bg-purple-500 text-white ml-2">View Dataset Statistics</Button>
    </div>
  );
};

export default DatasetManager;