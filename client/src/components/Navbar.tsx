import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Domains", href: "/domains" },
    { name: "Our Community", href: "/community" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-background">
            <img
              src="/ctrlz_icon_round.png"
              alt="CtrlZ Logo"
              className=""
            />
          </div>

          {/* <span className="text-2xl font-bold">CtrlZ</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button asChild className="ml-2 rounded-full">
            <Link to="/join">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 transition-all duration-300  ",
          isOpen ? "opacity-100 visible sticky" : "opacity-0 invisible"
        )}
      >
        <div className="container py-8 flex flex-col space-y-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-full justify-start rounded-sm px-2"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  Dark Mode
                </>
              )
            ) : (
              <>
                <Sun className="h-5 w-5 mr-2" />
                Theme
              </>
            )}
          </Button>
          <Button asChild className="rounded-full w-full mt-4">
            <Link to="/join" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
