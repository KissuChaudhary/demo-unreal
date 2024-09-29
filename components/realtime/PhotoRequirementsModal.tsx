import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type SlideWithItems = {
  title: string;
  content: string;
  items: Array<{ text: string; icon: string }>;
  images: string[];
};

type SlideWithImages = {
  title: string;
  content: string;
  images: string[];
};

type Slide = SlideWithItems | SlideWithImages;

const slides: Slide[] = [
  {
    title: "Photo requirements",
    content: "The AI will learn about you from your photos. It will pick things that repeat across photos, and assume those to be part of your appearance.",
    items: [
      { text: "No group shots", icon: "👥" },
      { text: "No blurry or low resolution photos", icon: "🖼️" },
      { text: "No caps or hats", icon: "🧢" },
      { text: "No silly faces", icon: "😜" },
      { text: "No car or mirror selfies", icon: "🚗" },
      { text: "No nudity", icon: "🔞" },
    ],
    images: [
      "/content/headshot5.webp",
      "/content/headshot5.webp",
      "/content/headshot5.webp",
      "/content/headshot5.webp",
      "/content/headshot5.webp",
      "/content/headshot5.webp"
    ]
  },
  {
    title: "Don't upload old photos",
    content: "Upload recent photos that show your current appearance. If you use older photos or photos where you look very different, AI may generate headshots that don't resemble you.",
    images: ["/content/headshot5.webp", "/content/headshot5.webp", "/content/headshot5.webp", "/content/headshot5.webp"]
  },
  {
    title: "Variety in background, clothes, and expression",
    content: "Photos captured on different occasions, with different backgrounds, clothes and expressions, helps the AI develop a comprehensive understanding of your appearance",
    images: ["/content/headshot5.webp", "/content/headshot5.webp", "/content/headshot5.webp", "/content/headshot5.webp"]
  }
];

interface PhotoRequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoRequirementsModal: React.FC<PhotoRequirementsModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const isSlideWithItems = (slide: Slide): slide is SlideWithItems => {
    return 'items' in slide;
  };

  const currentSlideContent = slides[currentSlide];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{currentSlideContent.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="mb-4">{currentSlideContent.content}</p>
          
          {isSlideWithItems(currentSlideContent) && (
            <div className="grid grid-cols-3 gap-4 mb-4">
              {currentSlideContent.items.map((item, index) => (
                <div key={index} className="border w-full aspect-[4/5] border-red-500 rounded-lg p-2">
                  <img src={currentSlideContent.images[index]} alt={item.text} className="w-full mb-2 rounded-lg object-cover" />
                  <p className="text-center">
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          {!isSlideWithItems(currentSlideContent) && (
            <div className="grid grid-cols-2 gap-4 w-full aspect-[4/5] mb-4">
              {currentSlideContent.images.map((img, index) => (
                <img key={index} src={img} alt={`Example ${index + 1}`} className="rounded-lg object-cover" />
              ))}
            </div>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <button onClick={prevSlide} className="bg-gray-200 px-4 py-2 rounded-lg">&larr;</button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="bg-gray-200 px-4 py-2 rounded-lg">&rarr;</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoRequirementsModal;
