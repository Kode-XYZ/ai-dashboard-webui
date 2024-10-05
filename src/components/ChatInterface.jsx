import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send } from 'lucide-react';

const ChatInterface = ({ onSendMessage, onStartRecording, onStopRecording }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleRecording = () => {
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex flex-col space-y-2">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="min-h-[100px]"
      />
      <div className="flex justify-end space-x-2">
        <Button onClick={handleRecording} variant="outline">
          <Mic className={`h-4 w-4 ${isRecording ? 'text-red-500' : ''}`} />
        </Button>
        <Button onClick={handleSend}>
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;