import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      type: '3 BHK',
      size: '2000 Sq. Ft.',
      price: '₹ 3.26 Cr*',
      features: [
        '3 Bedrooms + 3 Bathrooms',
        'Spacious Living & Dining',
        'Modular Kitchen',
        'Premium Flooring',
        '2 Covered Parking',
      ],
      popular: false,
    },
    {
      type: '3.5 BHK',
      size: '2450 Sq. Ft.',
      price: '₹ 4.10 Cr*',
      features: [
        '3 Bedrooms + Study + 3 Bathrooms',
        'Large Living & Dining Area',
        'Premium Modular Kitchen',
        'Luxury Flooring & Fittings',
        '2 Covered Parking',
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Choose Your Dream Home
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible payment plans and competitive pricing for luxury living
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl p-8 shadow-lg animate-scale-in ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-serif text-3xl font-bold mb-2">{plan.type}</h3>
                <p className="text-muted-foreground mb-4">{plan.size}</p>
                <p className="text-4xl font-bold text-primary">{plan.price}</p>
                <p className="text-sm text-muted-foreground mt-2">Onwards</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                Download Brochure
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-3xl font-bold mb-4">
            Special Launch Offer
          </h3>
          <p className="text-xl mb-6 text-primary-foreground/90">
            GRAB 20x5 PAYMENT PLAN
          </p>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Pay only 20% now and balance in 5 years. Limited period offer on select units.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Schedule Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
