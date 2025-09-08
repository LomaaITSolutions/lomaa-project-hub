import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, FileText, Headphones, Award, Users, Laptop, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Complete Project Development",
      description: "End-to-end project development from concept to implementation",
      features: [
        "Full source code with detailed comments",
        "Database design and implementation",
        "User interface development",
        "Testing and debugging",
        "Deployment guidance"
      ]
    },
    {
      icon: FileText,
      title: "Documentation & Reports",
      description: "Comprehensive project documentation and presentation materials",
      features: [
        "Project report (50-100 pages)",
        "Technical documentation",
        "PowerPoint presentations",
        "User manuals",
        "Installation guides"
      ]
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance and guidance throughout your project",
      features: [
        "WhatsApp support",
        "Video call assistance",
        "Email support",
        "Remote debugging help",
        "Project modification support"
      ]
    },
    {
      icon: BookOpen,
      title: "Project Training",
      description: "Complete training on your project implementation and technologies",
      features: [
        "One-on-one training sessions",
        "Technology explanations",
        "Code walkthrough",
        "Q&A sessions",
        "Implementation guidance"
      ]
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      price: "₹2,999",
      description: "Perfect for simple projects",
      features: [
        "Complete source code",
        "Basic documentation",
        "Installation guide",
        "Email support",
        "1 revision"
      ],
      recommended: false
    },
    {
      name: "Standard Package",
      price: "₹4,999",
      description: "Most popular choice",
      features: [
        "Complete source code",
        "Detailed project report",
        "PowerPoint presentation",
        "WhatsApp support",
        "2 revisions",
        "Video explanation"
      ],
      recommended: true
    },
    {
      name: "Premium Package",
      price: "₹7,999",
      description: "Complete project solution",
      features: [
        "Complete source code",
        "Comprehensive documentation",
        "PowerPoint presentation",
        "24/7 support",
        "Unlimited revisions",
        "Live training session",
        "Project customization"
      ],
      recommended: false
    }
  ];

  const stats = [
    { number: "1000+", label: "Projects Delivered" },
    { number: "50+", label: "Technologies Covered" },
    { number: "6", label: "Engineering Branches" },
    { number: "2000+", label: "Happy Students" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Complete B.Tech project solutions with expert guidance, 
            documentation, and 24/7 support across all engineering branches.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive project solutions designed to ensure your academic success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit your project requirements and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.recommended ? 'ring-2 ring-primary shadow-large' : 'shadow-soft'} transition-shadow hover:shadow-medium`}>
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg text-sm font-medium">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.recommended ? "hero" : "professional"} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact">
                      Choose {pkg.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to get your project completed successfully
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Project",
                description: "Browse our extensive project catalog and select your preferred project"
              },
              {
                step: "2",
                title: "Contact Us",
                description: "Get in touch with our team to discuss requirements and timeline"
              },
              {
                step: "3",
                title: "Development",
                description: "Our experts develop your project with regular progress updates"
              },
              {
                step: "4",
                title: "Delivery & Support",
                description: "Receive complete project package with ongoing support and training"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of successful students who have completed their B.Tech projects with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get Started Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/cse-it">
                Browse Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;