import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, Linkedin, Mail, MapPin, User, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const CommunityPage = () => {

  function resizeUrl(url, size = 128) {
    if (!url || url === "Not Uploaded") return "";
    return url.replace("/upload/", `/upload/c_fill,h_${size},w_${size},g_face,q_auto,f_auto/`);
  }

  const handleMemberClick = (member, type) => {
    setSelectedMember(member);
    setMemberType(type);
    setIsDialogOpen(true);
  };



  const [communityLeads, setCommunityLeads] = useState([]);
  const [domainLeads, setDomainLeads] = useState([]);
  const [coreMembers, setCoreMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [memberType, setMemberType] = useState(null); // 'communityLead', 'domainLead', 'coreMember'
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get("https://ctrlzbackend.onrender.com/fetch/communityLeads")
        .then(res => {
          console.log("Fetched community leads:", res.data);
          setCommunityLeads(res.data);
        })
        .catch(err => {
          console.error("Error fetching community leads:", err);
        }),
      axios.get("https://ctrlzbackend.onrender.com/fetch/domainLeads")
        .then(res => {
          console.log("Fetched Domain Leads:", res.data);
          setDomainLeads(res.data);
        })
        .catch(err => {
          console.error("Error fetching Domain Leads:", err);
        }),
      axios.get("https://ctrlzbackend.onrender.com/fetch/coreMembers")
        .then(res => {
          console.log("Fetched core members:", res.data);
          setCoreMembers(res.data);
        })
        .catch(err => {
          console.error("Error fetching core members:", err);
        })
    ]).finally(() => {
      setLoading(false);
    });
  }, []);

  // const domainLeads = [
  //   { domain: "AI/ML", lead: "Alice Johnson", initials: "AJ" },
  //   { domain: "Web Dev", lead: "Bob Williams", initials: "BW" },
  //   { domain: "App Dev", lead: "Carol Brown", initials: "CB" },
  //   { domain: "Cloud", lead: "David Miller", initials: "DM" },
  //   { domain: "IoT", lead: "Eve Davis", initials: "ED" },
  //   { domain: "Blockchain", lead: "Frank Wilson", initials: "FW" },
  // ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the people behind CtrlZ
            </p>
          </div>

          <div className="space-y-16">

            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Community Leads</h2>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="p-8 border-border/40">
                      <div className="flex items-start space-x-4">
                        <Skeleton className="h-20 w-20 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-1/2" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : communityLeads.length === 0 ? (
                <Card className="p-12 text-center border-border/40">
                  <p className="text-lg text-muted-foreground">
                    No community leads found.
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {communityLeads.map((lead, index) => (
                    <Card
                      key={lead._id || lead.email || index}
                      className="p-8 hover:shadow-lg transition-all duration-300 animate-slide-up border-border/40 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => handleMemberClick(lead, 'communityLead')}
                    >
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={resizeUrl(lead.pfp)} alt={lead.name} />
                          <AvatarFallback>{lead.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{lead.name}</h3>
                          <p className="text-accent mb-3">{lead.position}</p>
                          <p className="text-muted-foreground">{lead.about}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </section>


            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Domain Leads</h2>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="p-6 border-border/40">
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-14 w-14 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-5 w-24" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : domainLeads.length === 0 ? (
                <Card className="p-12 text-center border-border/40">
                  <p className="text-lg text-muted-foreground">
                    No domain leads found.
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {domainLeads.map((item, index) => (
                    <Card
                      key={item.domain || item._id || index}
                      className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up border-border/40 cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => handleMemberClick(item, 'domainLead')}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={resizeUrl(item.pfp)} alt={item.name} />
                          <AvatarFallback className="gradient-bg text-white">
                            {item.name || item.lead}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg">{item.lead || item.name}</p>
                          <p className="text-sm text-accent">{item.domain}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Core Members</h2>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="p-6 border-border/40">
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-14 w-14 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-5 w-24" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : coreMembers.length === 0 ? (
                <Card className="p-12 text-center border-border/40">
                  <p className="text-lg text-muted-foreground">
                    No core members found.
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coreMembers.map((item, index) => (
                    <Card
                      key={item._id || item.email || index}
                      className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up border-border/40 cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => handleMemberClick(item, 'coreMember')}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={resizeUrl(item.pfp)} alt={item.name} />
                          <AvatarFallback className="gradient-bg text-white">
                            {item.name}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg">{item.name}</p>
                          <p className="text-sm text-accent">{item.domain || item.position}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />

      {/* Member Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-2xl">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="flex flex-col items-center space-y-6 py-4">
                {/* Highlighted Photo */}
                <div className="relative">
                  <Avatar className="h-48 w-48 border-4 border-accent/20 shadow-xl">
                    <AvatarImage 
                      src={resizeUrl(selectedMember.pfp, 400)} 
                      alt={selectedMember.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl">
                      {selectedMember.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Information */}
                <div className="w-full space-y-4">
                  {/* Position or Domain */}
                  {(selectedMember.position || selectedMember.domain) && (
                    <div className="flex items-center justify-center space-x-2 text-accent">
                      <Briefcase className="h-5 w-5" />
                      <p className="text-lg font-semibold">
                        {selectedMember.position || selectedMember.domain}
                      </p>
                    </div>
                  )}

                  {/* Email */}
                  {selectedMember.email && (
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a 
                        href={`mailto:${selectedMember.email}`}
                        className="text-primary hover:underline"
                      >
                        {selectedMember.email}
                      </a>
                    </div>
                  )}

                  {/* About */}
                  {selectedMember.about && (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedMember.about}
                      </p>
                    </div>
                  )}

                  {/* Location */}
                  {(selectedMember.city || selectedMember.country) && (
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <p>
                        {[selectedMember.city, selectedMember.country]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    </div>
                  )}

                  {/* Social Media Links */}
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/40">
                    {selectedMember.github && (
                      <a
                        href={selectedMember.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {selectedMember.insta && (
                      <a
                        href={selectedMember.insta}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommunityPage;
