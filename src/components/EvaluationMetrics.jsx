import React from 'react';
import { Progress } from "@/components/ui/progress";

const EvaluationMetrics = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Accuracy</label>
        <Progress value={75} className="bg-purple-800/50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Precision</label>
        <Progress value={82} className="bg-purple-800/50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-lime-300 mb-2">Recall</label>
        <Progress value={68} className="bg-purple-800/50" />
      </div>
      {/* Add more evaluation metrics here */}
    </div>
  );
};

export default EvaluationMetrics;