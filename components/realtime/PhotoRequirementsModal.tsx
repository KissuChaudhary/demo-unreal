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
      "/content/groupphoto.webp",
      "/content/blurryshot.webp",
      "/content/nocaps.webp",
      "/content/sillyface.webp",
      "/content/mirrorselfies.webp",
      "/content/nonudity.webp"
    ]
  },
  {
    title: "Don't upload old photos",
    content: "Upload recent photos that show your current appearance. If you use older photos or photos where you look very different, AI may generate headshots that don't resemble you.",
    images: ["/content/old1.webp", "/content/old2.webp", "/content/old3.webp", "/content/old4.webp"]
  },
  {
    title: "Variety in background, clothes, and expression",
    content: "Photos captured on different occasions, with different backgrounds, clothes and expressions, helps the AI develop a comprehensive understanding of your appearance",
    images: ["/content/variety1.webp", "/content/variety2.webp", "/content/variety3.webp", "/content/variety4.webp"]
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
      <DialogContent className="sm:max-w-[90vw] md:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">{currentSlideContent.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p className="text-sm sm:text-base">{currentSlideContent.content}</p>
          
          {isSlideWithItems(currentSlideContent) && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {currentSlideContent.items.map((item, index) => (
                <div key={index} className="border border-red-500 rounded-lg p-2">
                  <div className="aspect-[4/5] mb-2">
                    <img 
                      src={currentSlideContent.images[index]} 
                      alt={item.text} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-center text-xs sm:text-sm">
                    <span className="mr-1">{item.icon}</span>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          {!isSlideWithItems(currentSlideContent) && (
            <div className="grid grid-cols-2 gap-4">
              {currentSlideContent.images.map((img, index) => (
                <div key={index} className="aspect-[4/5]">
                  <img 
                    src={img} 
                    alt={`Example ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <button onClick={prevSlide} className="bg-gray-200 px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">&larr;</button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="bg-gray-200 px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">&rarr;</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoRequirementsModal;
