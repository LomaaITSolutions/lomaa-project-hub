import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Lomaa IT Solutions
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted partner for B.Tech final year projects. We provide complete project 
              solutions with full source code, documentation, and guidance across all engineering branches.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                info@lomaait.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Branches</h3>
            <ul className="space-y-2">
              {[
                { name: "CSE/IT Projects", href: "/cse-it" },
                { name: "ECE Projects", href: "/ece" },
                { name: "Mechanical Projects", href: "/mechanical" },
                { name: "Civil Projects", href: "/civil" },
                { name: "EEE Projects", href: "/eee" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Complete Project Development",
                "Source Code & Documentation",
                "Project Guidance & Support",
                "Technical Consultation",
                "Implementation Support",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Lomaa IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-muted-foreground mt-4 md:mt-0">
            <MapPin className="h-4 w-4 mr-2" />
            Hyderabad, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;