import React from 'react';
import { Cpu } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center">
      <Cpu className="h-8 w-8 text-white" />
      <span className="ml-2 text-white font-bold text-xl">AI-Solutions</span>
    </div>
  );
}

export default Logo;