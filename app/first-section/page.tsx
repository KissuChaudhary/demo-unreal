"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  { src: "/content/headshot01.webp", alt: "AI-generated headshot 1 - Picshot AI" },
  { src: "/content/headshot02.webp", alt: "AI-generated headshot 2 - PicshotAI" },
  { src: "/content/headshot03.webp", alt: "AI-generated headshot 3 - Picshot AI" },
  { src: "/content/headshot04.webp", alt: "AI-generated headshot 4 - PicshotAI" },
  { src: "/content/headshot5.webp", alt: "AI-generated headshot 5 - Picshot AI" },
   { src: "/content/headshot6.webp", alt: "AI-generated headshot 6 - PicshotAI" },
   { src: "/content/headshot17.webp", alt: "AI-generated headshot 12 - Picshot AI" },
  { src: "/content/headshot7.webp", alt: "AI-generated headshot 7 - PicshotAI" },
  { src: "/content/headshot8.webp", alt: "AI-generated headshot 8 - Picshot AI" },
   { src: "/content/headshot9.webp", alt: "AI-generated headshot 9 - PicshotAI" },
  { src: "/content/headshot10.webp", alt: "AI-generated headshot 10 - Picshot AI" },
  { src: "/content/headshot11.webp", alt: "AI-generated headshot 11 - PicshotAI" },
 
];

const UserAvatars = () => {
  const users = [
    { id: 1, avatar: '/content/headshot14.webp', name: 'Rahul Patel'},
    { id: 2, avatar: '/content/headshot15.webp', name: 'Rohit Sharma'},
    { id: 3, avatar: '/content/headshot16.webp', name: 'Emily Johnson'},
    { id: 4, avatar: '/content/headshot19.webp', name: 'Priya Sharma'},
    { id: 5, avatar: '/content/headshot20.webp', name: 'Sadham Hussain'},
  ];
return (
    <div className="flex gap-4 justify-center pt-6">
      <span className="text-dark font-semibold text-sm">Trusted by</span>
      <div className="flex -space-x-2">
        {users.map((user) => (
          <img
            key={user.id}
            src={user.avatar}
            alt={`User ${user.id}`}
            className="w-6 h-6 rounded-full border-2 border-gray-800"
          />
        ))}
      </div>
      <span className="text-dark font-semibold text-sm mr-2">and 220+ others</span>
    </div>
  );
};

const FirstSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:pb-20 pb-10 space-y-10">
      {/* Text Section */}
      <div className="container mx-auto text-center px-1.5">
        <div className="flex justify-center hero-bg">
          <span className="text-lg font-bold bg-clip-text text-transparent animate-gradient px-4 py-1.5 rounded-lg gradient-text text-small">
            TRUSTED BY THOUSANDS, LOVED BY ALL
          </span>
        </div>

        <p className="text-lg md:text-xl mt-5 mb-5 bg-clip-text font-bold">
          #1 Professional AI Headshots Without the ‘Professional’ Part.
        </p>

        <div className="text-main text-6xl font-bold text-center text-indigo-900 mb-4">
          Your Boss Will Never Know It’s AI <br /> — We Promise!
        </div>
  <UserAvatars />
        <div className="flex gap-4 justify-center pt-10">
          <Link href="/login">
            <button className="flex items-center bg-indigo-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300">  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mr-2"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5,22v-5 M4.5,7V2 M2,4.5h5 M2,19.5h5 M13,3l-1.7,4.5c-0.3,0.7-0.4,1.1-0.6,1.4c-0.2,0.3-0.4,0.5-0.7,0.7C9.6,9.8,9.2,10,8.5,10.3L4,12l4.5,1.7c0.7,0.3,1.1,0.4,1.4,0.6c0.3,0.2,0.5,0.4,0.7,0.7c0.2,0.3,0.4,0.7,0.6,1.4L13,21l1.7-4.5c0.3-0.7,0.4-1.1,0.6-1.4c0.2-0.3,0.4-0.5,0.7-0.7c0.3-0.2,0.7-0.4,1.4-0.6L22,12l-4.5-1.7c-0.7-0.3-1.1-0.4-1.4-0.6c-0.3-0.2-0.5-0.4-0.7-0.7c-0.2-0.3-0.4-0.7-0.6-1.4L13,3z"
                />
              </svg>
              Generate AI headshots
            </button>
          </Link>
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full overflow-hidden">
        {/* Desktop Slider */}
        <div className="hidden md:flex w-full animate-slide">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[16.666%] p-2"
              style={{ padding: "0 10px" }} // Add padding between images
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full max-w-[200px] h-auto rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Mobile Fade In/Out */}
         <div className="block md:hidden relative w-full h-[36rem] p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full p-4 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
