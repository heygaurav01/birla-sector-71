import { useState } from 'react';
import g1 from '@/assets/g1.jpg';
import g2 from '@/assets/g2.jpg';
import g3 from '@/assets/g3.jpg';
import g4 from '@/assets/g4.jpg';
import g5 from '@/assets/g5.jpg';
import g6 from '@/assets/g6.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: g1, alt: 'Building Exterior View', category: 'Exterior' },
    { src: g2, alt: 'Luxury Interiors', category: 'Interior' },
    { src: g3, alt: 'Amenities & Facilities', category: 'Amenities' },
    { src: g4, alt: 'Landscape & Gardens', category: 'Landscape' },
    { src: g5, alt: 'Common Areas', category: 'Interior' },
    { src: g6, alt: 'Recreational Spaces', category: 'Amenities' },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Visual Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of your future home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-background font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-background hover:text-accent text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
