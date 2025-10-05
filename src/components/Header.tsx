import { Leaf, Menu } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/biospace-logo.png";

const Header = () => {
  return (
    <header className="w-full border-b border-border/50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BioSpace Atlas" className="w-10 h-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BioSpace Atlas
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Início
            </a>
            <a href="/chat" className="text-foreground/80 hover:text-primary transition-colors">
              Chat
            </a>
            <a href="/book" className="text-foreground/80 hover:text-primary transition-colors">
              Livro
            </a>
            <a href="#missoes" className="text-foreground/80 hover:text-primary transition-colors">
              Missões
            </a>
            <a href="#comunidade" className="text-foreground/80 hover:text-primary transition-colors">
              Comunidade
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
