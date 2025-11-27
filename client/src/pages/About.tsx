import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                About <span className="gradient-text">CtrlZ</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our story, mission, and values
              </p>
            </div>

            <Card className="p-8 md:p-12 space-y-8 animate-slide-up border-border/40">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CtrlZ is a student-driven tech community that bridges the gap between learning 
                  and real-world application. Through workshops, open-source projects, and hackathons, 
                  members gain hands-on experience across AI/ML, Web, App, Cloud, IoT and more. 
                  We focus on teamwork, practical skills, and building impact — where learners become creators.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">What We Do</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At CtrlZ, we believe in learning by doing. Our community provides:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Regular workshops and technical sessions on emerging technologies</li>
                    <li>Collaborative projects that solve real-world problems</li>
                    <li>Mentorship from experienced developers and industry professionals</li>
                    <li>Opportunities to contribute to open-source projects</li>
                    <li>Participation in hackathons and coding competitions</li>
                    <li>Networking with like-minded developers and innovators</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We push boundaries and embrace new technologies to stay ahead of the curve.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                    <p className="text-muted-foreground">
                      Together we achieve more. We believe in the power of teamwork and shared knowledge.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growth</h3>
                    <p className="text-muted-foreground">
                      Continuous learning and improvement are at the heart of everything we do.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impact</h3>
                    <p className="text-muted-foreground">
                      We create solutions that matter and make a real difference in the world.
                    </p>
                  </div>
                </div>
              </section>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
