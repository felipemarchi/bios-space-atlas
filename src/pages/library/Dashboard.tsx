import { Card } from "@/components/ui/card";
import { academicWorks } from "./Chat";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePaper } from "@/context/PaperContext";
import './dashboard-scrollbar.css';

interface DashboardProps {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    color: string;
}

const Dashboard = (props: DashboardProps) => {

    const { paperIndex, setPaperIndex } = usePaper();
    const [openDashboard, setOpenDashboard] = useState<boolean>(false);

    function isNotValid(paperIndex:number):boolean {
        return paperIndex === null || isNaN(paperIndex) || paperIndex < 0 || paperIndex >= academicWorks.length
    }

    useEffect(() => {
        setOpenDashboard(!isNotValid(paperIndex));
    },[paperIndex])

    return (
        <div className={`relative w-full overflow-hidden ${openDashboard ? 'pt-8' : 'py-8'} border-y border-border`}>
            <div className="flex px-4 gap-6">
                <Card
                className="glass-card flex-shrink-0 w-72 p-6 flex items-center gap-4 hover:scale-105 transition-transform"
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <props.icon className={`w-6 h-6 ${props.color}`} />
                    </div>
                    <div>
                        <span className="text-lg font-semibold text-gray-500">Vamos falar sobre:</span><br />         
                        <span className="text-lg font-semibold">{props.text}</span>
                    </div>
                </Card>
                {isNotValid(paperIndex) ? (
                    <div className="flex w-full items-center justify-center">
                        <p className="text-muted-foreground"><i>Selecione uma publicação para visualizar um painel de dados detalhados.</i></p>
                    </div>
                ) : (
                    <div className="flex w-full items-center justify-between">
                        <div>
                            <p className="text-lg"><b>Trabalho selecionado:</b> {academicWorks[paperIndex]}</p>                            
                            <p className="text-muted-foreground"><a href="#" className="text-primary">Acesse o artigo completo</a> ou expanda para ver detalhes como resumo, insights, e mais.</p>
                        </div>
                        <Button
                            className="hover:bg-transparent hover:text-white border border-primary"
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpenDashboard(!openDashboard)}
                        >
                            {openDashboard ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                    </div>
                )}
            </div>
            {openDashboard && (
                <div
                    className="py-8 px-4 flex-1 overflow-x-auto custom-scrollbar"
                    ref={el => {
                        if (!el) return;
                        // Remove event listener para evitar duplicidade
                        el.onwheel = null;
                        el.addEventListener('wheel', function(e) {
                            if (e.deltaY !== 0) {
                                el.scrollLeft += e.deltaY;
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }, { passive: false });
                    }}
                >
                    <div className="flex gap-2">
                        <div className="min-w-[400px] min-h-[200px] w-full bg-white/5 rounded-lg p-4 shadow">
                            <p className="mb-2"><b>Resumo:</b></p>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat turpis, condimentum elementum cursus a, varius ac ante. Nulla vestibulum mi vel lectus tempus laoreet. Donec volutpat eros vitae massa efficitur, ut fringilla arcu feugiat. Nunc vitae imperdiet purus. Integer suscipit sem justo, in hendrerit nisi interdum non. Morbi mauris dui, rhoncus a mi vitae, suscipit consectetur arcu. Sed a suscipit neque. Donec rhoncus eget est nec tempor. Nullam ultricies in mi a hendrerit.</p>
                        </div>
                        <div className="min-w-[400px] min-h-[200px] w-full bg-white/5 rounded-lg p-4 shadow">
                            <p className="mb-2"><b>Insights:</b></p>
                            <ul className="list-disc list-inside space-y-4 text-sm">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Donec erat turpis, condimentum elementum cursus a, varius ac ante.</li>
                                <li>Nulla vestibulum mi vel lectus tempus laoreet.</li>
                            </ul>
                        </div>
                        <div className="min-w-[800px] min-h-[200px] w-full bg-white/5 rounded-lg p-4 shadow">
                            <p className="mb-2"><b>WordCloud:</b></p>
                            <img src="src/assets/wordcloud.png" alt="WordCloud" />
                        </div>
                        {/* adicione outros painéis conforme necessário */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;