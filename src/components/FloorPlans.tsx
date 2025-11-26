import { useState } from 'react';
import masterPlan from '@/assets/master-plan.png';

const FloorPlans = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="floor-plans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Site & Floor Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed master plan showcasing the thoughtfully designed layout
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-scale-in">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">Master Plan</h3>
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage(masterPlan)}
            >
              <img
                src={masterPlan}
                alt="Birla Pravaah Master Plan - Site Layout"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-background text-lg font-semibold">Click to enlarge</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-xl p-6 animate-fade-in">
              <h4 className="font-semibold text-xl mb-4">Master Plan Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-muted-foreground">Landscaped pathways and green corridors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-muted-foreground">Multiple recreational zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-muted-foreground">Dedicated parking areas with turf cells</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <span className="text-muted-foreground">Central water features and gathering spaces</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary rounded-xl p-6 animate-fade-in">
              <h4 className="font-semibold text-xl mb-4">Available Configurations</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold mb-1">3 BHK Apartments</h5>
                  <p className="text-sm text-muted-foreground">2000 Sq.Ft | ₹ 3.26 Cr* Onwards</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h5 className="font-semibold mb-1">3.5 BHK Apartments</h5>
                  <p className="text-sm text-muted-foreground">2450 Sq.Ft | ₹ 4.10 Cr* Onwards</p>
                </div>
              </div>
            </div>
          </div>
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
              alt="Master Plan Enlarged View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FloorPlans;
