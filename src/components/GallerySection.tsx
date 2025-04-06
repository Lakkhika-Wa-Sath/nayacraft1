
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop",
      alt: "Hair styling",
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
      alt: "Nail art",
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000&auto=format&fit=crop",
      alt: "Facial treatment",
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
      alt: "Makeup application",
    },
    {
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop",
      alt: "Massage therapy",
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
      alt: "Hair coloring",
    },
  ];
  
  const openImage = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="salon-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gold-underline">Our Gallery</span>
          </h2>
          <p className="section-subtitle">
            Browse our portfolio showcasing our expert work and beautiful results
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-salon-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
            <img 
              src={selectedImage} 
              alt="Gallery preview" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
