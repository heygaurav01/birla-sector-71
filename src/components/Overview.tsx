import interiorImage from '@/assets/interior-luxury.jpg';

const Overview = () => {
  const highlights = [
    { label: 'Configuration', value: '3 & 3.5 BHK' },
    { label: 'Size Range', value: '2000 - 2500 Sq. Ft.' },
    { label: 'Total Floors', value: 'G+24 Floors' },
    { label: 'Total Units', value: '500 Residences' },
    { label: 'Land Area', value: '5 Acres' },
    { label: 'Possession', value: 'December 2028' },
  ];

  return (
    <section id="overview" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled luxury living in the heart of Gurgaon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src={interiorImage}
              alt="Luxury Interior"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="font-serif text-3xl font-bold">
              Birla Pravaah - Luxury 3 & 3.5 BHK Homes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Birla Pravaah at Sector 71, Gurgaon, represents the perfect blend of contemporary
              architecture and timeless elegance. Developed by the renowned Birla Estate, this
              residential masterpiece offers spacious 3 and 3.5 BHK homes designed for those who
              appreciate the finer things in life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located in one of Gurgaon's most sought-after locations, residents enjoy seamless
              connectivity to major business hubs, premium shopping destinations, and top-tier
              educational institutions. The project features world-class amenities, lush green
              landscapes, and modern security systems.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">GRAB 20x5 PAYMENT PLAN</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-semibold text-accent">Blend Of Luxury And Well-being</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className="font-semibold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
