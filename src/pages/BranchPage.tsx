import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Mail, Filter, Image } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  domain: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  imageDescription: string;
}

const BranchPage = () => {
  const { branch } = useParams<{ branch: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  // Enhanced project data based on your specifications
  const getProjectsForBranch = (branchName: string): Project[] => {
    const baseProjects: Record<string, Project[]> = {
      "cse-it": [
        {
          id: 1,
          title: "AI-Powered Chatbot for University Enquiries",
          domain: "AI/ML",
          technologies: ["Python", "Rasa", "NLP", "Flask"],
          difficulty: "Advanced",
          description: "Intelligent chatbot system for handling university inquiries using natural language processing",
          imageDescription: "Chatbot workflow diagram"
        },
        {
          id: 2,
          title: "E-Commerce Website with Recommendation Engine",
          domain: "Web Development",
          technologies: ["React", "Node.js", "MongoDB", "ML"],
          difficulty: "Advanced",
          description: "Complete e-commerce platform with AI-powered product recommendations using collaborative filtering",
          imageDescription: "Product recommendation flow"
        },
        {
          id: 3,
          title: "Blockchain-based Voting System",
          domain: "Blockchain",
          technologies: ["Ethereum", "Solidity", "Web3.js"],
          difficulty: "Advanced",
          description: "Secure digital voting system using blockchain technology for transparent elections",
          imageDescription: "Blockchain transaction diagram"
        },
        {
          id: 4,
          title: "Online Food Delivery System with Cloud Deployment",
          domain: "Web Development",
          technologies: ["Django", "PostgreSQL", "AWS EC2"],
          difficulty: "Intermediate",
          description: "Complete food delivery platform with real-time tracking and cloud deployment",
          imageDescription: "Food order process UI"
        },
        {
          id: 5,
          title: "Intelligent Fault Detection System using AWS",
          domain: "Cloud Computing",
          technologies: ["AWS CloudWatch", "SageMaker", "Python"],
          difficulty: "Advanced",
          description: "Cloud-based AIOps solution to detect anomalies in IT infrastructure logs using ML models",
          imageDescription: "Log anomaly detection flow"
        },
        {
          id: 6,
          title: "Face Recognition-based Attendance System",
          domain: "AI/ML",
          technologies: ["OpenCV", "Python", "Flask", "MySQL"],
          difficulty: "Intermediate",
          description: "Automated attendance tracking system using facial recognition technology",
          imageDescription: "Face recognition diagram"
        },
        {
          id: 7,
          title: "IoT Smart Parking System",
          domain: "IoT",
          technologies: ["Arduino", "IoT Sensors", "Node-RED", "Firebase"],
          difficulty: "Intermediate",
          description: "Smart parking management system with real-time slot detection and mobile app",
          imageDescription: "Parking slot detection diagram"
        },
        {
          id: 8,
          title: "College ERP System",
          domain: "Web Development",
          technologies: ["PHP", "MySQL", "Bootstrap"],
          difficulty: "Beginner",
          description: "Complete enterprise resource planning system for educational institutions",
          imageDescription: "ERP dashboard screenshot"
        },
        {
          id: 9,
          title: "Healthcare Appointment Booking System",
          domain: "Web Development",
          technologies: ["MERN Stack", "JWT", "MongoDB"],
          difficulty: "Intermediate",
          description: "Online healthcare appointment booking and management system",
          imageDescription: "Appointment booking UI"
        },
        {
          id: 10,
          title: "Cloud-based File Storage System",
          domain: "Cloud Computing",
          technologies: ["AWS S3", "Node.js", "Express"],
          difficulty: "Intermediate",
          description: "Secure cloud storage solution similar to Google Drive with file sharing capabilities",
          imageDescription: "File upload/download flow"
        }
      ],
      "ece": [
        {
          id: 1,
          title: "Smart Traffic Light Control using IoT",
          domain: "IoT",
          technologies: ["Raspberry Pi", "Sensors", "MQTT"],
          difficulty: "Intermediate",
          description: "Intelligent traffic management system using IoT sensors and adaptive timing",
          imageDescription: "Traffic signal circuit"
        },
        {
          id: 2,
          title: "IoT-based Home Automation System",
          domain: "IoT",
          technologies: ["ESP32", "Blynk App"],
          difficulty: "Intermediate",
          description: "Complete smart home automation with mobile app control and voice commands",
          imageDescription: "Smart home control diagram"
        },
        {
          id: 3,
          title: "Voice-controlled Wheelchair",
          domain: "Robotics",
          technologies: ["Arduino", "Bluetooth", "Speech Recognition"],
          difficulty: "Advanced",
          description: "Voice-activated wheelchair system for mobility assistance",
          imageDescription: "Wheelchair prototype sketch"
        },
        {
          id: 4,
          title: "Smart Agriculture Monitoring System",
          domain: "IoT",
          technologies: ["IoT Sensors", "LoRa", "Cloud DB"],
          difficulty: "Intermediate",
          description: "IoT-based crop monitoring with soil moisture, temperature, and humidity sensors",
          imageDescription: "Farm IoT sensors diagram"
        },
        {
          id: 5,
          title: "Gesture Recognition for Appliances Control",
          domain: "Embedded Systems",
          technologies: ["Accelerometer", "Arduino"],
          difficulty: "Intermediate",
          description: "Hand gesture-based control system for home appliances",
          imageDescription: "Gesture to device control flow"
        },
        {
          id: 6,
          title: "Solar-powered Mobile Charger",
          domain: "Renewable Energy",
          technologies: ["Solar Panel", "Battery", "DC-DC Converter"],
          difficulty: "Beginner",
          description: "Portable solar charging device for mobile phones and small electronics",
          imageDescription: "Charger circuit schematic"
        },
        {
          id: 7,
          title: "Smart Helmet with Accident Detection",
          domain: "Safety Systems",
          technologies: ["Accelerometer", "GSM", "GPS"],
          difficulty: "Intermediate",
          description: "Smart helmet with accident detection and automatic emergency alert system",
          imageDescription: "Helmet IoT module diagram"
        },
        {
          id: 8,
          title: "Biomedical Signal Monitoring (ECG/EEG)",
          domain: "Biomedical",
          technologies: ["Biomedical Sensors", "MATLAB"],
          difficulty: "Advanced",
          description: "Real-time monitoring and analysis of biomedical signals",
          imageDescription: "Signal waveform chart"
        },
        {
          id: 9,
          title: "Drone for Surveillance",
          domain: "Robotics",
          technologies: ["Drone Kit", "Camera", "Arduino"],
          difficulty: "Advanced",
          description: "Autonomous surveillance drone with live video streaming capabilities",
          imageDescription: "Drone control schematic"
        },
        {
          id: 10,
          title: "RFID-based Attendance System",
          domain: "Embedded Systems",
          technologies: ["RFID Reader", "Arduino", "LCD"],
          difficulty: "Beginner",
          description: "Automated attendance tracking using RFID technology",
          imageDescription: "RFID workflow diagram"
        }
      ],
      "mechanical": [
        {
          id: 1,
          title: "Design of Solar-powered Water Pump",
          domain: "Renewable Energy",
          technologies: ["Solar Panel", "Pump Design", "CAD"],
          difficulty: "Intermediate",
          description: "Efficient solar-powered water pumping system for irrigation applications",
          imageDescription: "Solar pump system diagram"
        },
        {
          id: 2,
          title: "Automatic Pneumatic Braking System",
          domain: "Automotive",
          technologies: ["Pneumatics", "Sensors", "Control Systems"],
          difficulty: "Advanced",
          description: "Advanced braking system with automatic collision detection and response",
          imageDescription: "Pneumatic brake circuit"
        },
        {
          id: 3,
          title: "Smart Irrigation Robot",
          domain: "Automation",
          technologies: ["Arduino", "Sensors", "Mobile Robot"],
          difficulty: "Intermediate",
          description: "Autonomous robot for precision irrigation in agricultural fields",
          imageDescription: "Irrigation robot design"
        },
        {
          id: 4,
          title: "Fabrication of Mini CNC Machine",
          domain: "Manufacturing",
          technologies: ["CNC", "Stepper Motors", "G-Code"],
          difficulty: "Advanced",
          description: "Small-scale CNC machine for precision machining operations",
          imageDescription: "CNC machine assembly"
        },
        {
          id: 5,
          title: "Hybrid Bicycle (Manual + Electric)",
          domain: "Automotive",
          technologies: ["Electric Motor", "Battery", "Control System"],
          difficulty: "Intermediate",
          description: "Hybrid bicycle with manual and electric assistance modes",
          imageDescription: "Hybrid bike schematic"
        },
        {
          id: 6,
          title: "Automatic Gear Shifting System",
          domain: "Automotive",
          technologies: ["Sensors", "Actuators", "Control Logic"],
          difficulty: "Advanced",
          description: "Automatic transmission system with intelligent gear shifting",
          imageDescription: "Gear shifting mechanism"
        },
        {
          id: 7,
          title: "Wind-powered Water Heater",
          domain: "Renewable Energy",
          technologies: ["Wind Turbine", "Heat Exchanger", "Controls"],
          difficulty: "Intermediate",
          description: "Wind energy-based water heating system for residential use",
          imageDescription: "Wind heater system layout"
        },
        {
          id: 8,
          title: "3D Printed Drone Frame",
          domain: "Manufacturing",
          technologies: ["3D Printing", "CAD", "Composite Materials"],
          difficulty: "Intermediate",
          description: "Lightweight drone frame design using 3D printing technology",
          imageDescription: "3D printed drone frame"
        },
        {
          id: 9,
          title: "Automated Material Handling System",
          domain: "Automation",
          technologies: ["Conveyor", "PLC", "Sensors"],
          difficulty: "Advanced",
          description: "Automated system for material transportation in manufacturing",
          imageDescription: "Material handling layout"
        },
        {
          id: 10,
          title: "Smart Dustbin with Hydraulic System",
          domain: "Automation",
          technologies: ["Hydraulics", "Sensors", "Arduino"],
          difficulty: "Beginner",
          description: "Automatic waste collection system with hydraulic compression",
          imageDescription: "Smart dustbin mechanism"
        }
      ],
      "eee": [
        {
          id: 1,
          title: "Solar-powered Smart Inverter System",
          domain: "Power Electronics",
          technologies: ["Solar Panels", "MPPT", "Grid-Tie Inverter"],
          difficulty: "Advanced",
          description: "Smart grid-connected solar inverter with maximum power point tracking",
          imageDescription: "Smart inverter circuit diagram"
        },
        {
          id: 2,
          title: "IoT-based Energy Monitoring System",
          domain: "Smart Grid",
          technologies: ["IoT", "Energy Meters", "Cloud Analytics"],
          difficulty: "Intermediate",
          description: "Real-time energy consumption monitoring and analytics system",
          imageDescription: "Energy monitoring dashboard"
        },
        {
          id: 3,
          title: "Wireless Power Transfer for EVs",
          domain: "Electric Vehicles",
          technologies: ["Wireless Charging", "Inductive Coupling", "Power Electronics"],
          difficulty: "Advanced",
          description: "Wireless charging system for electric vehicles using inductive coupling",
          imageDescription: "Wireless charging setup"
        },
        {
          id: 4,
          title: "Smart Grid Fault Detection",
          domain: "Power Systems",
          technologies: ["Fault Detection", "Smart Sensors", "Communication"],
          difficulty: "Advanced",
          description: "Intelligent fault detection and isolation system for smart grids",
          imageDescription: "Grid fault detection diagram"
        },
        {
          id: 5,
          title: "Wind-Solar Hybrid Power Plant",
          domain: "Renewable Energy",
          technologies: ["Wind Turbine", "Solar Panels", "Hybrid Controller"],
          difficulty: "Advanced",
          description: "Combined wind and solar power generation system with energy storage",
          imageDescription: "Hybrid power plant layout"
        }
      ],
      "civil": [
        {
          id: 1,
          title: "Smart Traffic Management using IoT Sensors",
          domain: "Smart City",
          technologies: ["IoT Sensors", "Traffic Analytics", "Signal Control"],
          difficulty: "Intermediate",
          description: "Intelligent traffic management system using IoT sensors and data analytics",
          imageDescription: "Smart traffic system layout"
        },
        {
          id: 2,
          title: "Green Building Design using BIM",
          domain: "Construction Technology",
          technologies: ["BIM", "Sustainable Design", "Energy Analysis"],
          difficulty: "Advanced",
          description: "Sustainable building design using Building Information Modeling",
          imageDescription: "BIM green building model"
        },
        {
          id: 3,
          title: "Smart Drainage System with IoT Monitoring",
          domain: "Water Management",
          technologies: ["IoT", "Water Level Sensors", "Pump Control"],
          difficulty: "Intermediate",
          description: "Automated drainage system with real-time monitoring and control",
          imageDescription: "Smart drainage network"
        },
        {
          id: 4,
          title: "Earthquake-resistant Building Model",
          domain: "Structural Engineering",
          technologies: ["Seismic Design", "Structural Analysis", "Safety Systems"],
          difficulty: "Advanced",
          description: "Earthquake-resistant building design with advanced damping systems",
          imageDescription: "Seismic building model"
        },
        {
          id: 5,
          title: "Water Quality Monitoring System",
          domain: "Environmental Engineering",
          technologies: ["Water Sensors", "IoT", "Data Analytics"],
          difficulty: "Intermediate",
          description: "Real-time water quality monitoring system for public water supplies",
          imageDescription: "Water monitoring setup"
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
        domains: ["Web Development", "AI/ML", "Cloud Computing", "IoT", "Blockchain", "Mobile Apps"]
      },
      "ece": {
        title: "Electronics & Communication Projects",
        description: "Innovative projects in IoT, embedded systems, robotics, and communication technologies",
        domains: ["IoT", "Embedded Systems", "Robotics", "Safety Systems", "Biomedical", "Renewable Energy"]
      },
      "mechanical": {
        title: "Mechanical Engineering Projects",
        description: "Advanced projects in manufacturing, automation, renewable energy, and automotive systems",
        domains: ["Manufacturing", "Automation", "Renewable Energy", "Automotive", "Thermal Engineering"]
      },
      "eee": {
        title: "Electrical & Electronics Projects",
        description: "Power systems, renewable energy, smart grid, and electric vehicle projects",
        domains: ["Power Electronics", "Smart Grid", "Electric Vehicles", "Power Systems", "Renewable Energy"]
      },
      "civil": {
        title: "Civil Engineering Projects",
        description: "Smart city, construction technology, water management, and structural engineering projects",
        domains: ["Smart City", "Construction Technology", "Water Management", "Structural Engineering", "Environmental Engineering"]
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
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
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
              Download Complete List (150+ Projects)
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
            Showing {filteredProjects.length} of {projects.length} projects (Sample - Total 150+ available)
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.domain}
                    </Badge>
                    <Badge className={`text-xs border ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  
                  {/* Image placeholder */}
                  <div className="w-full h-32 bg-gradient-secondary rounded-lg flex items-center justify-center mb-3">
                    <div className="text-center">
                      <Image className="h-8 w-8 text-muted-foreground mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground px-2">
                        {project.imageDescription}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">🛠️ Technologies:</div>
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
          
          {/* More Projects CTA */}
          <div className="mt-12 text-center bg-gradient-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need More Projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              This is just a sample. We have 150+ projects available for {branchInfo.title.split(' ')[0]} branch.
              Contact us to get the complete project list with detailed documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Complete Project List
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BranchPage;