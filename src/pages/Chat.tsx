import { useState } from "react";
import { Send, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const Chat = () => {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Olá! Como posso ajudar você com biologia hoje?",
      timestamp: new Date(),
    },
  ]);

  const academicWorks = [
    "Fotossíntese e Respiração Celular",
    "Genética Mendeliana",
    "Evolução das Espécies",
    "Ecossistemas Marinhos",
    "Biotecnologia Moderna",
  ];

  const savedNotebooks = [
    "Estudo sobre DNA",
    "Células Tronco",
    "Biodiversidade Brasileira",
    "Proteínas e Enzimas",
  ];

  const handleSubmit = () => {
    if (prompt.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: prompt,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setPrompt("");
      // TODO: Integrar com LLM
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex">
        {/* Painel Esquerdo - Trabalhos Acadêmicos */}
        <Collapsible
          open={leftPanelOpen}
          onOpenChange={setLeftPanelOpen}
          className="relative border-r border-border/50"
        >
          <div className={`h-full transition-all duration-300 ${leftPanelOpen ? "w-64" : "w-0"}`}>
            <CollapsibleContent className="h-full">
              <div className="h-full glass-card p-4">
                <h3 className="font-semibold mb-4 text-lg">Trabalhos Acadêmicos</h3>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-3">
                    {academicWorks.map((work, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Checkbox id={`work-${index}`} />
                        <label
                          htmlFor={`work-${index}`}
                          className="text-sm cursor-pointer hover:text-primary transition-colors"
                        >
                          {work}
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CollapsibleContent>
          </div>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 -right-10 z-10"
            >
              {leftPanelOpen ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        {/* Centro - Histórico de Conversas */}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-6">
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "glass-card"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Caixa de Texto */}
          <div className="border-t border-border/50 p-4">
            <div className="max-w-3xl mx-auto relative">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="min-h-[80px] pr-14 bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <Button
                onClick={handleSubmit}
                size="icon"
                className="absolute bottom-3 right-3 bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Painel Direito - Cadernos Salvos */}
        <Collapsible
          open={rightPanelOpen}
          onOpenChange={setRightPanelOpen}
          className="relative border-l border-border/50"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 -left-10 z-10"
            >
              {rightPanelOpen ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </CollapsibleTrigger>
          <div className={`h-full transition-all duration-300 ${rightPanelOpen ? "w-64" : "w-0"}`}>
            <CollapsibleContent className="h-full">
              <div className="h-full glass-card p-4">
                <h3 className="font-semibold mb-4 text-lg">Cadernos Salvos</h3>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-2">
                    {savedNotebooks.map((notebook, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 rounded-lg glass-card hover:bg-primary/10 transition-colors"
                      >
                        <p className="text-sm font-medium">{notebook}</p>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </main>

      {/* Linha do Tempo */}
      <section className="border-t border-border/50 glass-card py-6">
        <div className="container mx-auto px-4">
          <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
            Linha do Tempo
          </h3>
          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-4">
              {academicWorks.map((work, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-48"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-glow flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{work}</p>
                    </div>
                  </div>
                  {index < academicWorks.length - 1 && (
                    <div className="absolute top-1.5 left-3 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chat;
