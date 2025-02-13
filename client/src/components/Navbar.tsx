import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <span className="text-xl font-bold">Portfolio</span>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("skills")}>
            Skills
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
