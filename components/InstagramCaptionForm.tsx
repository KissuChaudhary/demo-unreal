'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, Clipboard, Check, AlertCircle } from 'lucide-react';

interface FormData {
  topic: string;
  mood: string;
  hashtags: string;
  callToAction: string;
}

interface Errors {
  [key: string]: string;
}

interface WordLimits {
  [key: string]: number;
}

const wordLimits: WordLimits = {
  topic: 20,
  mood: 10,
  hashtags: 15,
  callToAction: 20
};

export default function InstagramCaptionForm() {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    mood: '',
    hashtags: '',
    callToAction: ''
  });
  const [wordCounts, setWordCounts] = useState<FormData>({
    topic: '0',
    mood: '0',
    hashtags: '0',
    callToAction: '0'
  });
  const [generatedCaption, setGeneratedCaption] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const countWords = (text: string): number => {
    return text.trim().split(/\s+/).filter(word => word !== '').length;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const wordCount = countWords(value);
    
    if (wordCount <= wordLimits[name]) {
      setFormData(prev => ({ ...prev, [name]: value }));
      setWordCounts(prev => ({ ...prev, [name]: wordCount.toString() }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
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
      const response = await fetch('/api/openai-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, tool: 'instagramCaption' }),
      });
      if (!response.ok) {
        throw new Error('Failed to generate caption');
      }
      const data = await response.json();
      setGeneratedCaption(data.caption);
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'Failed to generate caption. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCaption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">Instagram Caption Generator</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Effortlessly Create Engaging Instagram Captions with Unrealshot AI – Creative, Captivating, and Instant.</p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-full p-6 border border-gray-200 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {(Object.keys(formData) as Array<keyof FormData>).map((field) => (
              <div key={field} className="relative">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                    {field.split(/(?=[A-Z])/).join(' ')}
                  </label>
                  <p className={`text-sm ${parseInt(wordCounts[field]) === wordLimits[field] ? 'text-orange-500' : 'text-gray-500'}`}>
                    {wordCounts[field]}/{wordLimits[field]} words
                  </p>
                </div>
                {field === 'hashtags' ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={3}
                    className={`block w-full px-4 py-3 rounded-md border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-150 ease-in-out`}
                    placeholder={`Enter ${field.split(/(?=[A-Z])/).join(' ').toLowerCase()}...`}
                  />
                ) : (
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-md border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-150 ease-in-out`}
                    placeholder={`Enter ${field.split(/(?=[A-Z])/).join(' ').toLowerCase()}...`}
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
              ) : 'Generate Caption'}
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
              <h2 className="text-2xl font-bold text-gray-800">Your Generated Caption:</h2>
              <button
                onClick={handleCopy}
                className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
                disabled={!generatedCaption}
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
            {generatedCaption ? (
              <p className="text-gray-700 whitespace-pre-wrap text-lg leading-relaxed">{generatedCaption}</p>
            ) : (
              <p className="text-gray-500 italic">Your generated Instagram caption will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
