import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, FileText, Headphones, Award, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const branches = [
    {
      title: "CSE / IT Projects",
      description: "Web Development, AI/ML, Data Science, Cloud Computing",
      count: "150+ Projects",
      href: "/cse-it",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "ECE Projects",
      description: "IoT, Embedded Systems, VLSI, Signal Processing",
      count: "120+ Projects",
      href: "/ece",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Mechanical Projects",
      description: "CAD/CAM, Thermal Engineering, Manufacturing",
      count: "100+ Projects",
      href: "/mechanical",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "EEE Projects",
      description: "Power Systems, Control Systems, Renewable Energy",
      count: "90+ Projects",
      href: "/eee",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Civil Projects",
      description: "Structural Analysis, Environmental Engineering",
      count: "80+ Projects",
      href: "/civil",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "AIML / Data Science",
      description: "Machine Learning, Deep Learning, Analytics",
      count: "130+ Projects",
      href: "/aiml",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Complete Source Code",
      description: "Get fully functional source code with detailed comments and documentation."
    },
    {
      icon: FileText,
      title: "Project Reports",
      description: "Comprehensive project reports with implementation details and analysis."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and guidance throughout your project."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "All projects are tested and verified to ensure high-quality deliverables."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "2000+", label: "Happy Students" },
    { number: "6", label: "Engineering Branches" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Your Final Year Project
              <span className="block">Solution Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Get complete B.Tech project solutions with source code, documentation, 
              and expert guidance across all engineering branches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Projects
              </Button>
            </div>
          </div>
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

      {/* Branches Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Branch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of projects tailored for each engineering branch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
                <CardHeader className="pb-4">
                  <div className={`w-full h-32 bg-gradient-to-r ${branch.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{branch.count}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {branch.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {branch.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="professional" className="w-full" asChild>
                    <Link to={branch.href}>
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Lomaa IT Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide complete project solutions with everything you need for success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
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
            Join thousands of successful students who chose Lomaa IT Solutions for their final year projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                <CheckCircle className="mr-2 h-5 w-5" />
                Contact Us Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Project List
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;