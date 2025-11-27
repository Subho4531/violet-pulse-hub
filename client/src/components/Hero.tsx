import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 lg:py-24">
      
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl">
            CtrlZ
          </h1>
          
          <div className="space-y-1">
            <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold gradient-text pb-2">
              Reversing Limits
            </p>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold gradient-text pb-2">
              Creating Possibilities
            </p>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Unite under the violet pulse of innovation — where visionaries code beyond limits, 
            shaping a universe of intelligence and imagination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full text-base px-8 h-12">
              <Link to="/join">Get Started</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base px-8 h-12"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Hero;
