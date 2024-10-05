import React, { useState } from 'react';
import Header from '../components/Header';
import ModelSelector from '../components/ModelSelector';
import ChatInterface from '../components/ChatInterface';
import ConfigurationAssistant from '../components/ConfigurationAssistant';
import Navigation from '../components/Navigation';
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [ttsModel, setTtsModel] = useState('');
  const [sttModel, setSttModel] = useState('');
  const [llmModel, setLlmModel] = useState('');
  const [imageModel, setImageModel] = useState('');
  const [useLlmAssist, setUseLlmAssist] = useState(false);

  const ttsModels = [
    { id: 'xtts', name: 'XTTS (Coqui)' },
    { id: 'bark', name: 'Bark (Suno)' },
    { id: 'amphion', name: 'Amphion' },
    { id: 'tortoise', name: 'Tortoise' },
  ];

  const sttModels = [
    { id: 'whisper', name: 'Whisper' },
    // Add other STT models here
  ];

  const llmModels = [
    { id: 'gpt4', name: 'GPT-4' },
    { id: 'claude', name: 'Claude' },
    // Add other LLM models here
  ];

  const imageModels = [
    { id: 'dalle', name: 'DALL-E' },
    { id: 'stable_diffusion', name: 'Stable Diffusion' },
    // Add other image models here
  ];

  const handleSendMessage = (message) => {
    console.log('Sending message:', message);
    // Implement message sending logic here
  };

  const handleStartRecording = () => {
    console.log('Starting recording');
    // Implement recording start logic here
  };

  const handleStopRecording = () => {
    console.log('Stopping recording');
    // Implement recording stop logic here
  };

  const handleConfigureAssistant = (config) => {
    console.log('Configuring assistant:', config);
    // Implement configuration logic here
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-purple-900/10 backdrop-blur-md shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-lime-300">Chat Interface</h2>
                <ChatInterface
                  onSendMessage={handleSendMessage}
                  onStartRecording={handleStartRecording}
                  onStopRecording={handleStopRecording}
                />
              </CardContent>
            </Card>
            <Card className="bg-purple-900/10 backdrop-blur-md shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-lime-300">Configuration Assistant</h2>
                <ConfigurationAssistant onConfigureAssistant={handleConfigureAssistant} />
              </CardContent>
            </Card>
          </div>
        );
      case 'Options':
        return (
          <Card className="bg-purple-900/10 backdrop-blur-md shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-lime-300">Options</h2>
              <div className="flex items-center space-x-2">
                <Switch
                  id="llm-assist"
                  checked={useLlmAssist}
                  onCheckedChange={setUseLlmAssist}
                />
                <label htmlFor="llm-assist" className="text-sm font-medium text-white">
                  Use LLM Assist for TTS
                </label>
              </div>
            </CardContent>
          </Card>
        );
      case 'APIs':
        return (
          <Card className="bg-purple-900/10 backdrop-blur-md shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-lime-300">API Configuration</h2>
              {/* Add API configuration options here */}
            </CardContent>
          </Card>
        );
      case 'Models':
        return (
          <Card className="bg-purple-900/10 backdrop-blur-md shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-lime-300">Model Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ModelSelector
                  label="TTS Model"
                  models={ttsModels}
                  selectedModel={ttsModel}
                  onModelChange={setTtsModel}
                />
                <ModelSelector
                  label="STT Model"
                  models={sttModels}
                  selectedModel={sttModel}
                  onModelChange={setSttModel}
                />
                <ModelSelector
                  label="LLM Model"
                  models={llmModels}
                  selectedModel={llmModel}
                  onModelChange={setLlmModel}
                />
                <ModelSelector
                  label="Image Model"
                  models={imageModels}
                  selectedModel={imageModel}
                  onModelChange={setImageModel}
                />
              </div>
            </CardContent>
          </Card>
        );
      case 'Training':
        return (
          <Card className="bg-purple-900/10 backdrop-blur-md shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-lime-300">Model Training</h2>
              {/* Add model training interface here */}
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-lime-700 text-white">
      <Header />
      <main className="container mx-auto p-4 space-y-6">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
