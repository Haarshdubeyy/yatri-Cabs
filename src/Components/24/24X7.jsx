import React from 'react';
import { Phone, Clock } from 'lucide-react';

const ContactDisplay = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-xs mx-auto">
      <div className="flex items-center mb-4">
        <Clock className="mr-3 text-blue-600" size={24} />
        <span className="font-bold text-gray-800">24x7 Support</span>
      </div>
      <div className="flex items-center">
        <Phone className="mr-3 text-green-600" size={24} />
        <a 
          href="tel:+917860663399" 
          className="text-xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
        >
          +91 786 066 3399
        </a>
      </div>
    </div>
  );
};

export default ContactDisplay;