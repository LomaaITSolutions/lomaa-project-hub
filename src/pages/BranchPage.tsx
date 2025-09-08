import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Mail, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  domain: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

const BranchPage = () => {
  const { branch } = useParams<{ branch: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  // Mock project data - in real app, this would come from API
  const getProjectsForBranch = (branchName: string): Project[] => {
    const baseProjects: Record<string, Project[]> = {
      "cse-it": [
        {
          id: 1,
          title: "E-commerce Website with AI Recommendations",
          domain: "Web Development",
          technologies: ["React", "Node.js", "MongoDB", "Python"],
          difficulty: "Advanced",
          description: "Complete e-commerce platform with AI-powered product recommendations"
        },
        {
          id: 2,
          title: "Real-time Chat Application",
          domain: "Web Development",
          technologies: ["React", "Socket.io", "Express", "MongoDB"],
          difficulty: "Intermediate",
          description: "Real-time messaging app with file sharing and group chat features"
        },
        {
          id: 3,
          title: "Fraud Detection using Machine Learning",
          domain: "AI/ML",
          technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
          difficulty: "Advanced",
          description: "ML model to detect fraudulent transactions in financial data"
        },
        {
          id: 4,
          title: "Student Management System",
          domain: "Web Development",
          technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
          difficulty: "Beginner",
          description: "Complete student information management system for colleges"
        },
        {
          id: 5,
          title: "Image Recognition using Deep Learning",
          domain: "AI/ML",
          technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
          difficulty: "Advanced",
          description: "Deep learning model for object detection and classification"
        },
        {
          id: 6,
          title: "Cloud-based File Storage System",
          domain: "Cloud Computing",
          technologies: ["AWS", "React", "Node.js", "S3"],
          difficulty: "Intermediate",
          description: "Secure cloud storage solution with file sharing capabilities"
        }
      ],
      "ece": [
        {
          id: 1,
          title: "IoT-based Smart Home Automation",
          domain: "IoT",
          technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
          difficulty: "Intermediate",
          description: "Complete home automation system with mobile app control"
        },
        {
          id: 2,
          title: "Wireless Sensor Network for Environmental Monitoring",
          domain: "Embedded Systems",
          technologies: ["Arduino", "XBee", "C++", "Python"],
          difficulty: "Advanced",
          description: "WSN system for monitoring temperature, humidity, and air quality"
        },
        {
          id: 3,
          title: "RFID-based Attendance System",
          domain: "Embedded Systems",
          technologies: ["Arduino", "RFID", "LCD", "C++"],
          difficulty: "Beginner",
          description: "Automated attendance tracking system using RFID technology"
        },
        {
          id: 4,
          title: "Digital Signal Processing for Audio Enhancement",
          domain: "Signal Processing",
          technologies: ["MATLAB", "C++", "DSP Kit"],
          difficulty: "Advanced",
          description: "Real-time audio processing for noise reduction and enhancement"
        },
        {
          id: 5,
          title: "Bluetooth-controlled Robot",
          domain: "Robotics",
          technologies: ["Arduino", "Bluetooth", "Android", "C++"],
          difficulty: "Intermediate",
          description: "Mobile-controlled robot with obstacle detection"
        },
        {
          id: 6,
          title: "VLSI Design of ALU using Verilog",
          domain: "VLSI",
          technologies: ["Verilog", "Xilinx", "FPGA"],
          difficulty: "Advanced",
          description: "Complete ALU design and implementation on FPGA"
        }
      ],
      "mechanical": [
        {
          id: 1,
          title: "3D Printing of Automotive Parts",
          domain: "Manufacturing",
          technologies: ["CAD", "3D Printing", "Materials Science"],
          difficulty: "Intermediate",
          description: "Design and 3D printing of custom automotive components"
        },
        {
          id: 2,
          title: "Solar Water Heater Design and Analysis",
          domain: "Thermal Engineering",
          technologies: ["SolidWorks", "ANSYS", "CFD"],
          difficulty: "Advanced",
          description: "Complete design and thermal analysis of solar water heating system"
        },
        {
          id: 3,
          title: "Automated Cutting Machine",
          domain: "Automation",
          technologies: ["PLC", "Pneumatics", "CAD"],
          difficulty: "Intermediate",
          description: "CNC-based automated cutting system for industrial applications"
        },
        {
          id: 4,
          title: "Wind Turbine Blade Design Optimization",
          domain: "Renewable Energy",
          technologies: ["ANSYS", "CFD", "SolidWorks"],
          difficulty: "Advanced",
          description: "Aerodynamic optimization of wind turbine blades for maximum efficiency"
        },
        {
          id: 5,
          title: "Hydraulic Jack Design and Testing",
          domain: "Mechanical Design",
          technologies: ["SolidWorks", "FEA", "Testing"],
          difficulty: "Beginner",
          description: "Complete design and stress analysis of hydraulic lifting system"
        },
        {
          id: 6,
          title: "Heat Exchanger Performance Analysis",
          domain: "Thermal Engineering",
          technologies: ["MATLAB", "Heat Transfer", "CFD"],
          difficulty: "Intermediate",
          description: "Thermal performance analysis and optimization of shell-tube heat exchanger"
        }
      ]
    };
    
    return baseProjects[branchName] || [];
  };

  const getBranchInfo = (branchName: string) => {
    const branchData: Record<string, { title: string; description: string; domains: string[] }> = {
      "cse-it": {
        title: "Computer Science & IT Projects",
        description: "Explore cutting-edge projects in web development, AI/ML, cloud computing, and more",
        domains: ["Web Development", "AI/ML", "Cloud Computing", "Mobile Apps", "Data Science"]
      },
      "ece": {
        title: "Electronics & Communication Projects",
        description: "Innovative projects in IoT, embedded systems, VLSI, signal processing, and robotics",
        domains: ["IoT", "Embedded Systems", "VLSI", "Signal Processing", "Robotics", "Telecommunications"]
      },
      "mechanical": {
        title: "Mechanical Engineering Projects",
        description: "Advanced projects in manufacturing, thermal systems, automation, and design",
        domains: ["Manufacturing", "Thermal Engineering", "Automation", "Renewable Energy", "Mechanical Design", "CAD/CAM"]
      }
    };
    
    return branchData[branchName] || { title: "Projects", description: "", domains: [] };
  };

  const projects = getProjectsForBranch(branch || "");
  const branchInfo = getBranchInfo(branch || "");
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDomain = selectedDomain === "All" || project.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {branchInfo.title}
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            {branchInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Complete List
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Project Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="All">All Domains</option>
                {branchInfo.domains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.domain}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="professional" className="w-full" asChild>
                    <Link to="/contact">
                      Get This Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No projects found matching your criteria
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedDomain("All");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BranchPage;