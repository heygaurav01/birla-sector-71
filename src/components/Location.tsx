import { MapPin, Car, Plane, GraduationCap, ShoppingBag } from 'lucide-react';

const Location = () => {
  const nearbyPlaces = [
    {
      icon: Car,
      title: 'NH-8',
      distance: '2 km',
      description: 'Quick access to major highways',
    },
    {
      icon: Plane,
      title: 'IGI Airport',
      distance: '20 km',
      description: 'Easy connectivity to airport',
    },
    {
      icon: ShoppingBag,
      title: 'Cyber Hub',
      distance: '8 km',
      description: 'Premium shopping & dining',
    },
    {
      icon: GraduationCap,
      title: 'Top Schools',
      distance: '3-5 km',
      description: 'Best educational institutions',
    },
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Prime Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located in Sector 71, Gurgaon for ultimate convenience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Sector 71, Gurgaon</h3>
                <p className="text-muted-foreground">
                  Located in one of Gurgaon's most prestigious neighborhoods, Birla Pravaah offers
                  excellent connectivity to Delhi NCR and key business districts. The project is
                  strategically positioned near Golf Course Extension Road, ensuring seamless access
                  to corporate offices, entertainment zones, and lifestyle destinations.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4">Connectivity Highlights</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">10 minutes to Golf Course Road</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">15 minutes to Cyber City</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">20 minutes to IGI Airport</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Easy access to Delhi via NH-8</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => {
                const Icon = place.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-secondary rounded-lg animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 text-primary mb-2" />
                    <h5 className="font-semibold mb-1">{place.title}</h5>
                    <p className="text-sm text-primary font-semibold mb-1">{place.distance}</p>
                    <p className="text-xs text-muted-foreground">{place.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-secondary rounded-2xl p-4 shadow-lg">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sector 71, Gurgaon, Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
