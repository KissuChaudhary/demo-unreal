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
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key as keyof FormData].trim()) {
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

  // Rest of the component remains the same...
  
  return (
    // JSX remains the same...
  );
}
