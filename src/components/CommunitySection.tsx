
import { Button } from "@/components/ui/button";
import { Discord, ArrowRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Join Our <span className="text-green-400">Community</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Connect with thousands of players, chat with staff, participate in events, and stay 
                updated with server news. Our Discord server is the heart of our community.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                  Chat with other players and make friends
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                  Get help from our staff team
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                  Participate in weekly events and giveaways
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                  Stay updated with server news and updates
                </li>
              </ul>
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                <Discord className="mr-2" size={20} />
                Join our Discord
              </Button>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Upcoming Events</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Survival Games Tournament",
                      date: "April 10th, 8PM EST",
                      prize: "Exclusive Items + $20 Store Credit"
                    },
                    {
                      name: "Build Competition",
                      date: "April 15th, 6PM EST",
                      prize: "Winner's build featured on spawn"
                    },
                    {
                      name: "Easter Egg Hunt",
                      date: "April 17th, All Day",
                      prize: "Special Easter Cosmetics"
                    }
                  ].map((event, index) => (
                    <div key={index} className="border-b border-gray-700 pb-3 last:border-0 last:pb-0">
                      <h4 className="font-medium text-white">{event.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{event.date}</p>
                      <p className="text-green-400 text-xs">Prize: {event.prize}</p>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 w-full text-green-400 hover:text-green-300 p-0">
                  View all events
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
