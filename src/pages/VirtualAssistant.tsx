import React from 'react';
import { Bot, Sparkles, Shield, Zap } from 'lucide-react';
import Chatbot from '../components/chat/Chatbot';
import ScheduleDemo from '../components/ScheduleDemo';

function VirtualAssistant() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              AI-Powered Virtual Assistant
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience the future of customer service with our intelligent virtual assistant.
              Available 24/7 to handle inquiries and provide instant support.
            </p>
          </div>
        </div>
      </div>

      {/* Chat and Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Try Our Virtual Assistant</h2>
            <div className="h-[400px]">
              <Chatbot />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Demo</h2>
            <ScheduleDemo />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Bot className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Natural Language Processing</h3>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-base text-gray-500">
                      Advanced natural language processing capabilities for human-like interactions
                      and understanding context.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Smart Learning</h3>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-base text-gray-500">
                      Continuously learns from interactions to improve responses and adapt to new scenarios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Shield className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Secure & Compliant</h3>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-base text-gray-500">
                      Enterprise-grade security and compliance with data protection regulations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Zap className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Instant Responses</h3>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-base text-gray-500">
                      Lightning-fast response times with 24/7 availability for customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualAssistant;