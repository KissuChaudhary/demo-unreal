'use client';

import React, { useState } from 'react';
import { Loader2, Clipboard, Check, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  currentRole: string;
  experience: string;
  skills: string;
  goals: string;
}

interface Errors {
  [key: string]: string;
}

export default function LinkedInBioForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    currentRole: '',
    experience: '',
    skills: '',
    goals: ''
  });
  const [generatedBio, setGeneratedBio] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-linkedin-bio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to generate bio');
      }
      const data = await response.json();
      setGeneratedBio(data.bio);
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'Failed to generate bio. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">LinkedIn Bio Generator</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-full p-6 border border-gray-200 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {(Object.keys(formData) as Array<keyof FormData>).map((field) => (
              <div key={field} className="relative">
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field.split(/(?=[A-Z])/).join(' ')}
                </label>
                {field === 'experience' ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={3}
                    className={`block w-full px-4 py-3 rounded-md border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-150 ease-in-out`}
                    placeholder={`Enter your professional ${field}...`}
                  />
                ) : (
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-md border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-150 ease-in-out`}
                    placeholder={`Enter your ${field.split(/(?=[A-Z])/).join(' ').toLowerCase()}...`}
                  />
                )}
                {errors[field] && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" />
                  Generating...
                </>
              ) : 'Generate Bio'}
            </button>
            {errors.submit && (
              <p className="mt-2 text-sm text-red-600 flex items-center justify-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.submit}
              </p>
            )}
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-full p-6 border border-gray-200 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Generated Bio:</h2>
              <button
                onClick={handleCopy}
                className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
                disabled={!generatedBio}
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Clipboard className="h-5 w-5 mr-1" />
                    Copy
                  </>
                )}
              </button>
            </div>
            {generatedBio ? (
              <p className="text-gray-700 whitespace-pre-wrap text-lg leading-relaxed">{generatedBio}</p>
            ) : (
              <p className="text-gray-500 italic">Your generated LinkedIn bio will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
