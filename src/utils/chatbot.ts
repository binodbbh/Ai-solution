// Simple response generation based on keywords
export async function getBotResponse(message: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hello! How can I assist you today?";
  }

  if (lowerMessage.includes('help')) {
    return "I can help you with information about our AI solutions, pricing, or schedule a demo. What would you like to know?";
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('pricing')) {
    return "Our pricing varies based on your specific needs. Would you like to schedule a consultation to discuss your requirements?";
  }

  if (lowerMessage.includes('demo')) {
    return "I'd be happy to help you schedule a demo. Please visit our demo request page or provide your contact information.";
  }

  if (lowerMessage.includes('features') || lowerMessage.includes('capabilities')) {
    return "Our AI solutions include natural language processing, machine learning, and automated decision-making capabilities. Would you like to learn more about any specific feature?";
  }

  if (lowerMessage.includes('contact')) {
    return "You can reach our team at contact@ai-solutions.com or fill out the contact form on our website. Would you like me to guide you to the contact page?";
  }

  if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return "Thank you for chatting with me! If you have any more questions, feel free to ask. Have a great day!";
  }

  return "I understand you're interested in learning more. Could you please provide more specific details about what you'd like to know?";
}