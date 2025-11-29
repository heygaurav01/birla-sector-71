import { MapPin, Building2, School, ShoppingBag, Hospital } from 'lucide-react';
import locationMap from '@/assets/location-map.jpg';

const Location = () => {
  const connectivityDetails = [
    { title: 'Cyber City', time: '11 mins' },
    { title: 'Golf Pavilion', time: '04 mins' },
    { title: 'Sector 42/43 Metro Station', time: '03 mins' },
    { title: 'Shiv Nadar School', time: '06 mins' },
    { title: 'Cafe Soul Garden', time: '11 mins' },
    { title: 'Artemis Hospital', time: '13 mins' },
    { title: 'IGI Airport', time: '30 mins' },
    { title: 'Ambience Mall', time: '20 mins' },
    { title: 'Golf Course Ext. Road', time: '05 mins' },
    { title: 'Sohna Road', time: '05 mins' },
  ];

  const nearbyPlaces = [
    {
      icon: Building2,
      title: 'Cyber City',
      distance: '11 mins',
      description: 'Major business hub',
    },
    {
      icon: ShoppingBag,
      title: 'Ambience Mall',
      distance: '20 mins',
      description: 'Premium shopping destination',
    },
    {
      icon: School,
      title: 'Shiv Nadar School',
      distance: '06 mins',
      description: 'Top educational institution',
    },
    {
      icon: Hospital,
      title: 'Artemis Hospital',
      distance: '13 mins',
      description: 'World-class healthcare',
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {connectivityDetails.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-muted-foreground text-sm">{item.title}</span>
                    <span className="text-primary font-semibold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
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

          <div className="space-y-6 animate-fade-in">
            {/* Google Maps Embed */}
            <div className="bg-secondary rounded-2xl p-4 shadow-lg">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7018.984993767333!2d77.0093556935791!3d28.40439260000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23ccdaf67e99%3A0x809eb3c70d04aa9c!2sBirla-Pravaah!5e0!3m2!1sen!2sin!4v1764323551736!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Birla Pravaah Location Map"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/place/Sector+71,+Gurugram,+Haryana/@28.43456898249145,77.06884731508198,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Location Map Image */}
            <div className="bg-secondary rounded-2xl p-4 shadow-lg">
              <img
                src={locationMap}
                alt="Birla Pravaah Location Connectivity Map"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
