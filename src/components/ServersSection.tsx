
import { Button } from "@/components/ui/button";

const servers = [
  {
    name: "Survival",
    description: "Experience Minecraft as it was meant to be played. Build, mine, and survive in our vast world with minimal plugins.",
    players: "450",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1920&auto=format&fit=crop"
  },
  {
    name: "Skyblock",
    description: "Start on your own island and expand it into an empire. Complete challenges and trade with other players.",
    players: "327",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop"
  },
  {
    name: "Creative",
    description: "Let your imagination run wild in our creative world. Unlimited resources and WorldEdit access for everyone.",
    players: "296",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1920&auto=format&fit=crop"
  },
  {
    name: "Minigames",
    description: "From Bedwars to Parkour, we have a variety of minigames for you to enjoy with friends or solo.",
    players: "181",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1920&auto=format&fit=crop"
  }
];

const ServersSection = () => {
  return (
    <section id="servers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-green-400">Game Modes</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            NayaCraft offers various game modes to suit different play styles.
            Jump between servers and experience them all with the same account.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servers.map((server, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Join Server
                  </Button>
                </div>
                <img 
                  src={server.image} 
                  alt={server.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {server.players} Players
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{server.name}</h3>
                <p className="text-gray-400 mb-4">{server.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 text-sm">/join {server.name.toLowerCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
