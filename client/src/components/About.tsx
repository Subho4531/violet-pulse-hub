import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="gradient-text">CtrlZ</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                CtrlZ is a student-driven tech community that bridges the gap between learning and real-world application. 
                Through workshops, open-source projects, and hackathons, members gain hands-on experience across AI/ML, 
                Web, App, Cloud, IoT and more.
              </p>
              <p>
                We focus on teamwork, practical skills, and building impact — where learners become creators.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/about">Read More About Us</Link>
            </Button>
          </div>

          <Card className="p-8 lg:p-12 bg-gradient-to-br from-gradient-violet/10 via-gradient-blue/10 to-gradient-teal/10 border-border/40 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                {/* <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl">
                  C
                </div> */}
                <div className="w-16 rounded-sm  overflow-hidden">
                <img src="ctrlz.png" className="w-20"></img>

                </div>
                <div>
                  <h3 className="text-2xl font-bold">Community First</h3>
                  <p className="text-muted-foreground">Building together, growing together</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Join a vibrant community of student developers, designers, and innovators 
                who are passionate about technology and making a difference.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
