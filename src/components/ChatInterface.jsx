import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Send, StopCircle } from 'lucide-react';

const ChatInterface = ({ 
  backgroundColor = 'bg-purple-950/80',
  userMessageColor = 'bg-purple-800',
  aiMessageColor = 'bg-gray-800',
  sendButtonColor = 'bg-lime-600 hover:bg-lime-500',
  recordButtonColor = 'bg-purple-800 hover:bg-purple-700',
  inputBackgroundColor = 'bg-purple-900/50',
  onSendMessage,
  onStartRecording,
  onStopRecording,
  additionalModules = [],
}) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (message.trim()) {
      const userMessage = { type: 'user', content: message };
      setChatHistory(prev => [...prev, userMessage]);
      setMessage('');

      if (onSendMessage) {
        const aiResponse = await onSendMessage(message);
        setChatHistory(prev => [...prev, { type: 'ai', content: aiResponse }]);
      }
    }
  };

  const handleRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      onStopRecording && onStopRecording();
    } else {
      onStartRecording && onStartRecording();
    }
  };

  return (
    <Card className={`${backgroundColor} backdrop-blur-md shadow-lg`}>
      <CardContent className="p-6">
        <div className="h-96 overflow-y-auto mb-4 space-y-4">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`p-2 rounded-lg ${msg.type === 'user' ? userMessageColor : aiMessageColor} ml-auto max-w-[80%]`}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className={`flex-grow ${inputBackgroundColor} text-white placeholder-purple-300`}
          />
          <Button onClick={handleRecording} variant="outline" className={recordButtonColor}>
            {isRecording ? <StopCircle className="h-4 w-4 text-red-500" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button onClick={handleSend} className={`${sendButtonColor} text-white`}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
        {additionalModules.map((Module, index) => (
          <Module key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ChatInterface;