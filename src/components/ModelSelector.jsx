import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ModelSelector = ({ label, models, selectedModel, onModelChange }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Select value={selectedModel} onValueChange={onModelChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select ${label} model`} />
        </SelectTrigger>
        <SelectContent>
          {models.map((model) => (
            <SelectItem key={model.id} value={model.id}>
              {model.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ModelSelector;