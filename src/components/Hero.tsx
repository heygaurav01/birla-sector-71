import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-building.jpg';

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Thank you for your interest!",
    //   description: "Our team will contact you shortly.",
    // });
    setFormData({ name: '', email: '', phone: '' });
    navigate('/thank-you.html');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Birla Pravaah Luxury Residences"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-background animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent rounded-full mb-6">
              <span className="text-sm font-semibold text-accent-foreground">NEW LAUNCH</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Birla Pravaah
            </h1>

            <p className="text-xl md:text-2xl mb-3 text-background/90">
              At Sector 71, Gurgaon
            </p>

            <p className="text-lg mb-6 text-background/80">
              By Birla Estate
            </p>

            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-background/20">
              <p className="text-2xl font-semibold mb-4 text-background">
                Luxury Masterpiece in The Heart of Gurugram
              </p>
              <div className="flex flex-col space-y-2 text-background/90">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span>Land Parcel: 5 Acres</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span>No of Units: 500 Residences</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg mb-2 text-background/80">Luxury 3 & 3.5 BHK Homes</p>
              <p className="text-4xl font-bold text-accent">₹ 3.26 Cr* Onwards</p>
            </div>

            <p className="text-sm text-background/70">
              RERA No: RC/REP/HARERA/GGM/1006/738/2025/109
            </p>
          </div>

          {/* Right Content - Registration Form */}
          <div className="bg-background rounded-2xl shadow-2xl p-8 animate-scale-in">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              Pre-Register for Best Offers
            </h2>
            <p className="text-muted-foreground mb-6">
              Get exclusive pricing and floor plans
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Mobile No *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setFormData({ ...formData, phone: value });
                  }}
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="consent" required className="mt-1" />
                <label htmlFor="consent" className="text-xs text-muted-foreground">
                  I consent to the use of my provided data in accordance with the privacy policy.
                </label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                Pre-Register Now
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Free Cab Facility For Site Visit
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
