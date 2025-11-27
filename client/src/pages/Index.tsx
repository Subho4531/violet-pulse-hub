import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Domains from "@/components/Domains";
import JoinSection from "@/components/JoinSection";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center ">
      <Navbar />
      
        <InteractiveGridPattern
        squares={[40,40]} 
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] ",
          
        )}

        squaresClassName="hover:fill-gradient-blue/80 transition-colors duration-300"
        
/>
      
      <main>
        <Hero />
        <Features />
        <About />
        <Domains />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
