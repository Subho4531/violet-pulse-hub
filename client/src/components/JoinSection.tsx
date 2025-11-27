import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const JoinSection = () => {
  const benefits = [
    "Real-World Projects",
    "Open Source & Hackathons",
    "Multi-Domain Learning",
    "Peer Collaboration",
    "Skill Development",
    "Community-Driven Growth",
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container">
        <Card className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-gradient-violet/5 via-gradient-blue/5 to-gradient-teal/5 border-border/40">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why Join <span className="gradient-text">CtrlZ?</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a community where learners become creators, where ideas transform into impact, 
              and where you can code beyond limits under the violet pulse of innovation.
            </p>

            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
              <Link to="/join">Apply to CtrlZ</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default JoinSection;
