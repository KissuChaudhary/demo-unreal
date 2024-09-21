import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-main text-6xl font-bold text-center text-indigo-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="transform transition duration-500 hover:scale-105 p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:support@Unrealshot.com" className="hover:text-purple-600 transition-colors">
                      support@unrealshot.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="transform transition duration-500 hover:scale-105 p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">By Pass Road, Sadabad, Hathras, UP, India, 281306</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="relative">
            <img
              src="/content/contact-us.webp"
              alt="Contact Us"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
