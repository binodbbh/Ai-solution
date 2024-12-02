import React, { useState } from 'react';
import { Bot, X, Minimize2, Maximize2 } from 'lucide-react';
import Chatbot from './Chatbot';

function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className={`bg-white rounded-lg shadow-xl transition-all duration-300 ${
          isMinimized ? 'h-14 w-72' : 'h-[500px] w-[350px]'
        }`}>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-indigo-600" />
              <span className="font-medium text-gray-700">AI Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          {!isMinimized && (
            <div className="h-[calc(100%-60px)]">
              <Chatbot />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-end space-y-2">
          <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm text-gray-700">AI Assistant</p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
          >
            <Bot className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatPopup;