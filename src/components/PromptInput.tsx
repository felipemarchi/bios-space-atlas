import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const PromptInput = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim()) {
      console.log("Prompt enviado:", prompt);
      // TODO: Integrar com LLM
      setPrompt("");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="glass-card rounded-2xl p-6 glow-primary">
        <div className="flex items-start gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Pergunte ao Atlas</h2>
            <p className="text-sm text-muted-foreground">
              Explore o universo da biologia com inteligência artificial
            </p>
          </div>
        </div>
        
        <div className="relative">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Digite sua pergunta sobre biologia, ecossistemas, evolução..."
            className="min-h-[120px] pr-14 bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <Button
            onClick={handleSubmit}
            size="icon"
            className="absolute bottom-3 right-3 bg-primary hover:bg-primary/90 glow-primary"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
