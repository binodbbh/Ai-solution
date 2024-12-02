import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${isBot ? 'mr-3' : 'ml-3'}`}>
          {isBot ? (
            <div className="bg-indigo-100 rounded-full p-2">
              <Bot className="h-6 w-6 text-indigo-600" />
            </div>
          ) : (
            <div className="bg-gray-100 rounded-full p-2">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          )}
        </div>
        <div>
          <div
            className={`rounded-lg p-4 ${
              isBot
                ? 'bg-indigo-50 text-gray-800'
                : 'bg-indigo-600 text-white'
            }`}
          >
            <p className="text-sm">{message}</p>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">
            {timestamp.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;