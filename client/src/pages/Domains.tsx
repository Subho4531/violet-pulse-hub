import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Globe, Smartphone, Cloud, Cpu, Link as LinkIcon } from "lucide-react";

const DomainsPage = () => {
  const domains = [
    {
      icon: Brain,
      name: "AI/ML",
      slug: "ai-ml",
      description: "Explore machine learning, neural networks, and artificial intelligence",
      details: "Dive into the world of artificial intelligence and machine learning. Learn about neural networks, deep learning, natural language processing, and computer vision.",
    },
    {
      icon: Globe,
      name: "Web Development",
      slug: "web",
      description: "Build modern web applications with cutting-edge frameworks",
      details: "Master modern web technologies including React, Vue, Node.js, and more. Create responsive, scalable web applications.",
    },
    {
      icon: Smartphone,
      name: "App Development",
      slug: "app",
      description: "Create mobile applications for iOS and Android platforms",
      details: "Learn to build native and cross-platform mobile applications using React Native, Flutter, Swift, and Kotlin.",
    },
    {
      icon: Cloud,
      name: "Cloud Computing",
      slug: "cloud",
      description: "Master cloud services, DevOps, and scalable architectures",
      details: "Understand cloud platforms like AWS, Azure, and Google Cloud. Learn about containerization, orchestration, and CI/CD pipelines.",
    },
    {
      icon: Cpu,
      name: "IoT",
      slug: "iot",
      description: "Connect the physical and digital worlds with IoT solutions",
      details: "Work with sensors, microcontrollers, and embedded systems. Build smart devices and learn about IoT protocols.",
    },
    {
      icon: LinkIcon,
      name: "Blockchain",
      slug: "blockchain",
      description: "Dive into decentralized technologies and smart contracts",
      details: "Explore blockchain technology, cryptocurrency, smart contracts, and decentralized applications (dApps).",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="gradient-text">Domains</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore diverse technology domains and find your passion
            </p>
          </div>

          <div className="space-y-8">
            {domains.map((domain, index) => (
              <Card
                key={domain.slug}
                className="p-8 md:p-12 hover:shadow-xl transition-all duration-300 animate-slide-up border-border/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="space-y-4">
                    <domain.icon className="h-16 w-16 text-accent" />
                    <h2 className="text-3xl font-bold">{domain.name}</h2>
                    <p className="text-muted-foreground">{domain.description}</p>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {domain.details}
                    </p>
                    <Button asChild className="rounded-full">
                      <Link to="/join">Get Started in {domain.name}</Link>
                    </Button>
                  </div>
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

export default DomainsPage;
