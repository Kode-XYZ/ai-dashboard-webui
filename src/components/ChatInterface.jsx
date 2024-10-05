import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Send, StopCircle } from 'lucide-react';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { type: 'user', content: message }]);
      setMessage('');
      // Here you would typically call an API to get the AI response
      // For now, we'll just simulate a response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { type: 'ai', content: "This is a simulated AI response." }]);
      }, 1000);
    }
  };

  const handleRecording = () => {
    setIsRecording(!isRecording);
    // Implement actual recording logic here
  };

  return (
    <Card className="bg-purple-900/30 backdrop-blur-md shadow-lg">
      <CardContent className="p-6">
        <div className="h-96 overflow-y-auto mb-4 space-y-4">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-purple-800 ml-auto' : 'bg-lime-800 mr-auto'} max-w-[80%]`}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow bg-purple-800/50 text-white placeholder-purple-300"
          />
          <Button onClick={handleRecording} variant="outline" className="bg-purple-800 hover:bg-purple-700">
            {isRecording ? <StopCircle className="h-4 w-4 text-red-500" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button onClick={handleSend} className="bg-lime-600 hover:bg-lime-500 text-white">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;