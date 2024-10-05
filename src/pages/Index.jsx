import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ChatInterface from '../components/ChatInterface';
import Dashboard from '../components/Dashboard';
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const handleSendMessage = async (message) => {
    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `This is a simulated AI response to: "${message}"`;
  };

  const handleStartRecording = () => {
    console.log('Started recording');
    // Implement actual recording logic here
  };

  const handleStopRecording = () => {
    console.log('Stopped recording');
    // Implement actual recording stop logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto p-4 space-y-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="chat">
            <ChatInterface 
              backgroundColor="bg-purple-950/80"
              userMessageColor="bg-purple-800"
              aiMessageColor="bg-gray-800"
              sendButtonColor="bg-lime-600 hover:bg-lime-500"
              recordButtonColor="bg-purple-800 hover:bg-purple-700"
              inputBackgroundColor="bg-purple-900/50"
              onSendMessage={handleSendMessage}
              onStartRecording={handleStartRecording}
              onStopRecording={handleStopRecording}
            />
          </TabsContent>
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;