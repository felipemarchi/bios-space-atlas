import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { VscFilePdf } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

interface PromptInputProps {
  ativarRecomendacoes?: boolean,
};

const PromptInput = (props: PromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (prompt.trim()) {
      console.log("Prompt enviado:", prompt);
      // TODO: Integrar com LLM
      setPrompt("");
      navigate('/library?a=3'); // Redireciona para a página da biblioteca
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
              Explore o universo da biologia espacial com inteligência artificial
            </p>
          </div>
        </div>
        
        <div className="relative">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Digite sua pergunta sobre biologia espacial, ecossistemas, evolução..."
            className="min-h-[240px] pr-14 bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
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

        {props.ativarRecomendacoes && (
          <div className="flex items-start gap-3 mb-4 mt-4">
            <div className="flex-1">
              <p className="text-sm mb-2">
                Recomendações baseadas em suas últimas pesquisas:
              </p>
              <div className="gap-2 flex flex-wrap">
                <a href="#">
                  <Card
                    className="flex-shrink-0 p-2 flex items-center gap-2 bg-white/10 hover:scale-105 transition-transform"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <VscFilePdf className={`w-5 h-5 text-red-500`} />
                    </div>
                    <span className="text-sm font-semibold">Trabalho XPTO</span>
                  </Card>
                </a>

                <a href="#">
                  <Card
                    className="flex-shrink-0 p-2 flex items-center gap-2 bg-white/10 hover:scale-105 transition-transform"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <VscFilePdf className={`w-5 h-5 text-red-500`} />
                    </div>
                    <span className="text-sm font-semibold">Trabalho Lorem Ipsum</span>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptInput;
