import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import ActionCards from "@/components/ActionCards";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="text-center space-y-4 max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Explore o Universo da Biologia
            </h2>
            <p className="text-xl text-muted-foreground">
              Uma jornada educacional através do espaço e da vida
            </p>
          </div>

          <PromptInput />
          
          <ActionCards />
        </div>
      </main>
      
      <footer className="border-t border-border/50 py-6 glass-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 BioSpace Atlas. Explorando a vida através da tecnologia.
        </div>
      </footer>
    </div>
  );
};

export default Index;
