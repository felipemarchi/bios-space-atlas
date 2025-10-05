import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatExploration from "./ChatExploration";

const Index = () => {
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <ChatExploration />
      
      <Footer />
    </div>
  );
};

export default Index;
