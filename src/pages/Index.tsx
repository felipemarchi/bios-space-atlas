import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import ActionCards from "@/components/ActionCards";
import { VscLightbulbSparkle } from 'react-icons/vsc';
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-main">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="text-center space-y-4 max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text">
              Explore o Universo da Biologia Espacial
            </h2>
            <p className="text-xl text-muted-foreground">
              Uma jornada educacional através do espaço e da vida
            </p>
          </div>

          <PromptInput />
          
          <ActionCards />

          <div className="text-center space-y-4 max-w-3xl">
            <p className="text-lg text-muted-foreground" title="Você sabia?">
              <VscLightbulbSparkle className="inline-block mr-2 text-3xl" />
              A microgravidade aumenta em 30% a taxa de mutação de bactérias
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
