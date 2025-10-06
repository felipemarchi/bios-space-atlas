import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoriesBar from "./StoriesBar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePaper } from "@/context/PaperContext";

const papers = [
"Adaptation Mechanisms of Microorganisms in Microgravity Environments",
"The Impact of Cosmic Radiation on Human Cellular Function During Long-Term Spaceflight",
"Plant Growth and Gene Expression in Extraterrestrial Soil Analogs",
"Immune System Modulation in Astronauts: Challenges of Extended Space Missions",
"Bioregenerative Life Support Systems: Harnessing Biology for Sustainable Space Habitats"
];

const Index = () => {

  const [currentPage, setCurrentPage] = useState(0);  

  // Conteúdo das páginas do livro
  const pages = [
    {
      title: "",
      content: "",
      img: "",
    },
    {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis ultricies sem et tincidunt. Suspendisse convallis diam non est dignissim interdum. Vivamus eu lacus feugiat, pellentesque sem sit amet, dapibus enim.",
      img: "./src/assets/book/1.jpg",
    },
    {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis ultricies sem et tincidunt. Suspendisse convallis diam non est dignissim interdum. Vivamus eu lacus feugiat, pellentesque sem sit amet, dapibus enim.",
      img: "./src/assets/book/2.jpg",
    },
    {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis ultricies sem et tincidunt. Suspendisse convallis diam non est dignissim interdum. Vivamus eu lacus feugiat, pellentesque sem sit amet, dapibus enim.",
      img: "./src/assets/book/3.jpg",
    },
    {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis ultricies sem et tincidunt. Suspendisse convallis diam non est dignissim interdum. Vivamus eu lacus feugiat, pellentesque sem sit amet, dapibus enim.",
      img: "./src/assets/book/4.jpg",
    },
    {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis ultricies sem et tincidunt. Suspendisse convallis diam non est dignissim interdum. Vivamus eu lacus feugiat, pellentesque sem sit amet, dapibus enim.",
      img: "",
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
  const { paperIndex, setPaperIndex } = usePaper();

  function isNotValid(paperIndex:number):boolean {
      return paperIndex === null || isNaN(paperIndex) || paperIndex < 0 || paperIndex >= papers.length
  }

  return (  
    <div className="min-h-screen flex flex-col bg-main">
      <Header />
      <StoriesBar papers={papers} />

      <main className="flex flex-1 justify-center items-center container mx-auto px-4 py-12">
        <div className="w-full max-w-6xl">
          {!isNotValid(paperIndex) && (
            /* Livro */
            <div className="flex relative bg-book px-4 py-2 rounded-sm gap-1 perspective-[2000px]">              
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

              {/* Página Esquerda */}
              <div className="flex-1 glass-card p-8 min-h-[500px] rounded-l-lg border-r-0 transform-style-3d animate-fade-in">
                <div className="h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">
                    {leftPage?.title}
                  </h2>
                  {leftPage?.img && (<img className="mb-4" src={leftPage.img} />)}   
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
                  <h2 className="text-2xl font-bold mb-4">
                    {rightPage?.title}
                  </h2>
                  {rightPage?.img && (<img className="mb-4" src={rightPage.img} />)}                  
                  <p className="text-foreground/80 leading-relaxed flex-1">
                    {rightPage?.content}
                  </p>
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    {currentPage + 2}
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
              
              {/* Indicador de Progresso */}
              <div className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2">
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
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
};

export default Index;
