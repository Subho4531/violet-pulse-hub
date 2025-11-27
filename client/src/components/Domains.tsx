import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Globe, Smartphone, Cloud, Cpu, Link as LinkIcon } from "lucide-react";

const Domains = () => {
  const domains = [
    {
      icon: Brain,
      name: "AI/ML",
      slug: "ai-ml",
      description: "Explore machine learning, neural networks, and artificial intelligence",
    },
    {
      icon: Globe,
      name: "Web Development",
      slug: "web",
      description: "Build modern web applications with cutting-edge frameworks",
    },
    {
      icon: Smartphone,
      name: "App Development",
      slug: "app",
      description: "Create mobile applications for iOS and Android platforms",
    },
    {
      icon: Cloud,
      name: "Cloud Computing",
      slug: "cloud",
      description: "Master cloud services, DevOps, and scalable architectures",
    },
    {
      icon: Cpu,
      name: "IoT",
      slug: "iot",
      description: "Connect the physical and digital worlds with IoT solutions",
    },
    {
      icon: LinkIcon,
      name: "Blockchain",
      slug: "blockchain",
      description: "Dive into decentralized technologies and smart contracts",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Explore <span className="gradient-text">Domains</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path and dive deep into cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <Card
              key={domain.slug}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up border-border/40 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <domain.icon className="h-12 w-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{domain.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {domain.description}
              </p>
              <Button asChild variant="ghost" className="rounded-full w-full group-hover:bg-accent/10">
                <Link to={`/domains/${domain.slug}`}>Learn More</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
