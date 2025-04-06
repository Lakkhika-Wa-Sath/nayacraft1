
import { Button } from "@/components/ui/button";
import { Copy, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.nayacraft.com";

  const copyServerIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="salon-container py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white fade-in">
            Welcome to <span className="text-green-400">NayaCraft</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 fade-in fade-in-delay-1">
            Join thousands of players in an immersive Minecraft experience.
            Survival, minigames, and a friendly community await you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in fade-in-delay-2">
            <div className="relative w-full sm:w-auto">
              <div className="flex items-center bg-black/50 border border-gray-700 rounded-lg p-2 px-4">
                <span className="text-gray-300 mr-2">{serverIP}</span>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={copyServerIP} 
                  className="hover:bg-gray-800 text-gray-300"
                >
                  <Copy size={16} />
                </Button>
              </div>
              {copied && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-900/80 text-green-100 px-2 py-1 rounded text-xs">
                  Copied!
                </div>
              )}
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 w-full sm:w-auto">
              Start Playing
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 fade-in fade-in-delay-3">
            <div className="bg-black/50 border border-gray-800 p-4 rounded-lg">
              <h3 className="text-green-400 font-semibold mb-2">PLAYERS ONLINE</h3>
              <p className="text-white text-2xl font-bold">1,254</p>
            </div>
            <div className="bg-black/50 border border-gray-800 p-4 rounded-lg">
              <h3 className="text-green-400 font-semibold mb-2">SERVER VERSION</h3>
              <p className="text-white text-2xl font-bold">1.20.4</p>
            </div>
            <div className="bg-black/50 border border-gray-800 p-4 rounded-lg">
              <h3 className="text-green-400 font-semibold mb-2">GAME MODES</h3>
              <p className="text-white text-2xl font-bold">4</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
