import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              Academic Association
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Advancing scholarship and fostering intellectual dialogue among
              researchers and analysts worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/events" className="hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-accent transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-accent transition-colors">
                  People
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@academicassoc.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 University Ave, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Academic Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
