
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
    caption: "Our custom plugins bring unique experiences",
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1920&auto=format&fit=crop",
    caption: "Survival mode with land claiming and economy",
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop",
    caption: "Creative building competitions every month",
  },
  {
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1920&auto=format&fit=crop",
    caption: "Join our community events and win prizes",
  },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Server <span className="text-green-400">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Take a look at what our server has to offer. From stunning builds to exciting gameplay,
            there's something for everyone.
          </p>
        </div>
        
        <div className="relative">
          {/* Gallery Slider */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-gray-800">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg md:text-xl">{image.caption}</p>
                </div>
              </div>
            ))}
            
            {/* Navigation Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 text-white hover:bg-black/70 z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 text-white hover:bg-black/70 z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-green-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Gallery Grid (Desktop) */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                className={`overflow-hidden rounded-lg h-24 ${
                  index === activeIndex ? "ring-2 ring-green-400" : "opacity-70"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
