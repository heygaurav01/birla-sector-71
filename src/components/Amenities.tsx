import { Dumbbell, Trees, Shield, Users, Car, Building2, Waves, Heart } from 'lucide-react';
import amenitiesImage from '@/assets/amenities-overview.jpg';

const Amenities = () => {
  const amenities = [
    {
      icon: Dumbbell,
      title: 'Modern Gymnasium',
      description: 'State-of-the-art fitness center with premium equipment',
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Temperature-controlled pool with deck area',
    },
    {
      icon: Trees,
      title: 'Landscaped Gardens',
      description: 'Beautifully designed green spaces for relaxation',
    },
    {
      icon: Users,
      title: 'Clubhouse',
      description: 'Premium clubhouse with multipurpose hall',
    },
    {
      icon: Shield,
      title: '24x7 Security',
      description: 'Advanced security systems with trained personnel',
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Covered and visitor parking facilities',
    },
    {
      icon: Building2,
      title: 'Kids Play Area',
      description: 'Safe and engaging play zones for children',
    },
    {
      icon: Heart,
      title: 'Yoga & Meditation',
      description: 'Dedicated spaces for wellness activities',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with premium facilities designed for your comfort
          </p>
        </div>

        <div className="mb-16 animate-slide-up">
          <img
            src={amenitiesImage}
            alt="Amenities Overview"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[600px]"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-secondary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary group-hover:bg-background rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-7 h-7 text-primary-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-muted-foreground">Sq. Ft. Clubhouse</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">80%</p>
              <p className="text-muted-foreground">Open Green Spaces</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Premium Amenities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
