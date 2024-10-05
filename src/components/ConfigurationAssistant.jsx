import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ConfigurationAssistant = ({ onConfigureAssistant }) => {
  const [config, setConfig] = React.useState('');

  const handleConfigure = () => {
    onConfigureAssistant(config);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Configuration Assistant</h2>
      <Textarea
        value={config}
        onChange={(e) => setConfig(e.target.value)}
        placeholder="Describe your desired configuration..."
        className="min-h-[150px]"
      />
      <Button onClick={handleConfigure}>Configure Assistant</Button>
    </div>
  );
};

export default ConfigurationAssistant;