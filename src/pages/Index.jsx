import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ChatInterface from '../components/ChatInterface';
import Dashboard from '../components/Dashboard';
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="min-h-screen bg-purple-dark text-white">
      <Header />
      <main className="container mx-auto p-4 space-y-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="chat">
            <ChatInterface />
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