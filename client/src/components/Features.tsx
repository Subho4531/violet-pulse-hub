import { Users, Briefcase, Layers, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Mentorship",
      description: "Learn from experienced developers and industry professionals",
    },
    {
      icon: Briefcase,
      title: "Real Projects",
      description: "Work on practical projects that solve real-world problems",
    },
    {
      icon: Layers,
      title: "Multi-Domain",
      description: "Explore AI/ML, Web, App, Cloud, IoT, and Blockchain",
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Contribute to open source and participate in hackathons",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-10 w-10 mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
