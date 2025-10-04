import { Compass, Calendar, BookOpen, Share2 } from "lucide-react";
import { Card } from "./ui/card";

const actions = [
  {
    title: "Criar módulo de exploração",
    description: "Desenvolva seus próprios módulos educacionais interativos",
    icon: Compass,
    iconClass: "text-primary",
    bgClass: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    title: "Missão do dia",
    description: "Descubra novos desafios diários de aprendizado",
    icon: Calendar,
    iconClass: "text-secondary",
    bgClass: "bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    title: "Modo história",
    description: "Aprenda através de narrativas envolventes",
    icon: BookOpen,
    iconClass: "text-accent",
    bgClass: "bg-accent/10 group-hover:bg-accent/20",
  },
  {
    title: "Compartilhe seu trabalho conosco",
    description: "Contribua com a comunidade BioSpace",
    icon: Share2,
    iconClass: "text-primary",
    bgClass: "bg-primary/10 group-hover:bg-primary/20",
  },
];

const ActionCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Card
            key={index}
            className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/50"
          >
            <div className={`w-12 h-12 rounded-xl ${action.bgClass} flex items-center justify-center mb-4 transition-colors`}>
              <Icon className={`w-6 h-6 ${action.iconClass}`} />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {action.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {action.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default ActionCards;
