import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ModelSelector from './ModelSelector';
import ConfigurationAssistant from './ConfigurationAssistant';
import AIParameters from './AIParameters';
import TrainingInterface from './TrainingInterface';

const Dashboard = () => {
  return (
    <Tabs defaultValue="options" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-purple-900/50 backdrop-blur-md rounded-lg">
        <TabsTrigger value="options">Options</TabsTrigger>
        <TabsTrigger value="models">Models</TabsTrigger>
        <TabsTrigger value="parameters">Parameters</TabsTrigger>
        <TabsTrigger value="training">Training</TabsTrigger>
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
            <ModelSelector />
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
    </Tabs>
  );
};

export default Dashboard;