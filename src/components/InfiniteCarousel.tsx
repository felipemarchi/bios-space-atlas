import { Dna, Microscope, Atom, Leaf, Beaker, Brain } from "lucide-react";
import { Card } from "./ui/card";

const carouselItems = [
  { icon: Dna, text: "Genética Avançada", color: "text-primary" },
  { icon: Microscope, text: "Microbiologia", color: "text-accent" },
  { icon: Atom, text: "Bioquímica", color: "text-primary" },
  { icon: Leaf, text: "Ecologia", color: "text-accent" },
  { icon: Beaker, text: "Biotecnologia", color: "text-primary" },
  { icon: Brain, text: "Neurociência", color: "text-accent" },
];

const InfiniteCarousel = () => {
  // Duplicar os itens para criar efeito infinito
  const duplicatedItems = [...carouselItems, ...carouselItems];

  return (
    <div className="relative w-full overflow-hidden py-8 border-y border-border/30">
      <div className="flex animate-scroll gap-6">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={index}
              className="glass-card flex-shrink-0 w-64 p-6 flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-lg font-semibold">{item.text}</span>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
