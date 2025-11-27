import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI Vision Assistant",
      summary: "Computer vision project for object detection and classification",
      domains: ["AI/ML", "Python"],
      status: "active",
      repo: "#",
      demo: "#",
    },
    {
      title: "Community Platform",
      summary: "Full-stack web application for community management",
      domains: ["Web", "React", "Node.js"],
      status: "active",
      repo: "#",
      demo: "#",
    },
    {
      title: "Smart Home IoT",
      summary: "IoT solution for home automation and monitoring",
      domains: ["IoT", "Arduino"],
      status: "active",
      repo: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications built by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up border-border/40 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="rounded-full">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.domains.map((domain) => (
                      <Badge key={domain} variant="outline" className="rounded-full">
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-6 pt-6 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 rounded-full" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Repo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 rounded-full" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
