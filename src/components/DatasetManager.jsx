import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DatasetManager = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Upload Dataset</label>
        <Input type="file" className="bg-purple-800/50 text-white" />
      </div>
      <Button className="bg-lime-600 hover:bg-lime-500 text-white">Process Dataset</Button>
      {/* Add more dataset management features here */}
    </div>
  );
};

export default DatasetManager;