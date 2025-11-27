import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MembersGridPage = () => {
  // Placeholder member data
  const members = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    role: i % 3 === 0 ? "Lead" : i % 3 === 1 ? "Domain Lead" : "Core Member",
    domain: ["AI/ML", "Web", "App", "Cloud", "IoT", "Blockchain"][i % 6],
    bio: "Passionate about technology and innovation",
    initials: `M${i + 1}`,
  }));

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Member <span className="gradient-text">Directory</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our community of innovators and creators
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, role, or domain..."
                className="pl-12 rounded-full"
              />
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card
                key={member.id}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up border-border/40 group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-24 w-24 group-hover:scale-110 transition-transform">
                    <AvatarFallback className="text-xl gradient-bg text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-accent mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.domain}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {member.bio}
                  </p>
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

export default MembersGridPage;
