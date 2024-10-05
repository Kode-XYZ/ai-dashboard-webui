import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ModelSelector from './ModelSelector';
import ConfigurationAssistant from './ConfigurationAssistant';
import AIParameters from './AIParameters';
import TrainingInterface from './TrainingInterface';
import DatasetManager from './DatasetManager';
import VisualizationTool from './VisualizationTool';
import EvaluationMetrics from './EvaluationMetrics';

const Dashboard = () => {
  const [selectedModel, setSelectedModel] = useState('');
  
  const models = [
    { id: 'gpt3', name: 'GPT-3' },
    { id: 'gpt4', name: 'GPT-4' },
    { id: 'bert', name: 'BERT' },
    { id: 'amphion', name: 'Amphion' },
    { id: 'ultralytics', name: 'Ultralytics' },
    { id: 'neurosandbox', name: 'NeuroSandbox' },
  ];

  return (
    <Tabs defaultValue="options" className="w-full">
      <TabsList className="grid w-full grid-cols-7 bg-purple-900/50 backdrop-blur-md rounded-lg">
        <TabsTrigger value="options">Options</TabsTrigger>
        <TabsTrigger value="models">Models</TabsTrigger>
        <TabsTrigger value="parameters">Parameters</TabsTrigger>
        <TabsTrigger value="training">Training</TabsTrigger>
        <TabsTrigger value="datasets">Datasets</TabsTrigger>
        <TabsTrigger value="visualization">Visualization</TabsTrigger>
        <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
      </TabsList>
      <TabsContent value="options">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">Configuration Assistant</h2>
            <ConfigurationAssistant />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="models">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">Model Selection</h2>
            <ModelSelector 
              label="AI Model"
              models={models}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="parameters">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">AI Parameters</h2>
            <AIParameters />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="training">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">Model Training</h2>
            <TrainingInterface />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="datasets">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">Dataset Management</h2>
            <DatasetManager />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="visualization">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">Data Visualization</h2>
            <VisualizationTool />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="evaluation">
        <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-lime-300">Model Evaluation</h2>
            <EvaluationMetrics />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Dashboard;