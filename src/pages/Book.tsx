import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Conteúdo das páginas do livro
  const pages = [
    {
      title: "Introdução à Biologia",
      content: "A biologia é a ciência que estuda a vida e os organismos vivos, incluindo sua estrutura, função, crescimento, evolução, distribuição e taxonomia.",
    },
    {
      title: "Células e Estruturas",
      content: "As células são as unidades básicas da vida. Todos os organismos vivos são compostos por células, que podem ser procarióticas ou eucarióticas.",
    },
    {
      title: "DNA e Genética",
      content: "O DNA contém as instruções genéticas usadas no desenvolvimento e funcionamento de todos os organismos vivos conhecidos.",
    },
    {
      title: "Evolução",
      content: "A teoria da evolução explica como as espécies mudam ao longo do tempo através da seleção natural e outros mecanismos.",
    },
    {
      title: "Ecossistemas",
      content: "Um ecossistema é uma comunidade de organismos vivos interagindo com os componentes não-vivos de seu ambiente.",
    },
    {
      title: "Biodiversidade",
      content: "A biodiversidade refere-se à variedade de vida na Terra, incluindo a diversidade dentro das espécies, entre espécies e de ecossistemas.",
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 2) {
      setCurrentPage(currentPage + 2);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  const leftPage = pages[currentPage];
  const rightPage = pages[currentPage + 1];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          {/* Botão Anterior */}
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10"
            variant="outline"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Livro */}
          <div className="flex gap-1 perspective-[2000px]">
            {/* Página Esquerda */}
            <div className="flex-1 glass-card p-8 min-h-[500px] rounded-l-lg border-r-0 transform-style-3d animate-fade-in">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {leftPage?.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed flex-1">
                  {leftPage?.content}
                </p>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  {currentPage + 1}
                </div>
              </div>
            </div>

            {/* Divisor Central */}
            <div className="w-1 bg-gradient-to-b from-border/0 via-border to-border/0" />

            {/* Página Direita */}
            <div className="flex-1 glass-card p-8 min-h-[500px] rounded-r-lg border-l-0 transform-style-3d animate-fade-in">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {rightPage?.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed flex-1">
                  {rightPage?.content}
                </p>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  {currentPage + 2}
                </div>
              </div>
            </div>
          </div>

          {/* Botão Próximo */}
          <Button
            onClick={nextPage}
            disabled={currentPage >= pages.length - 2}
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10"
            variant="outline"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Indicador de Progresso */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(pages.length / 2) }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === currentPage / 2 ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Book;
