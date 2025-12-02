import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.svg"
                alt="Birla Pravaah Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-background/70 text-sm mb-4">
              Experience luxury living in the heart of Gurgaon. A masterpiece by
              Birla Estate.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#overview"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Disclaimer.html"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >

                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >

                </a>
              </li>
              <li>
                <a
                  href="/Disclaimer.html"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <span>+91 8200 801 802</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <span>contact@elaris.consulting</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-background/10 rounded-lg">
              <p className="text-xs text-background/70 mb-1">PROJECT RERA No:</p>
              <p className="text-xs font-semibold">
                RC/REP/HARERA/GGM/1006/738/2025/109 https://haryanarera.gov.in/
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70">
              <p>© {currentYear} Birla Pravaah. All rights reserved.</p>
              <div className="mt-1">
                <a href="/Disclaimer.html" className="hover:text-primary transition-colors underline">
                  Disclaimer & Privacy Policy
                </a>
              </div>
            </div>
            <p className="text-xs text-background/60 text-center">
              *Prices and availability subject to change. Please contact sales
              team for current offers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
