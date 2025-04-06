
import { Twitter, Facebook } from "lucide-react";
import Discord from "@/components/icons/Discord";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Servers", href: "#servers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Community", href: "#community" },
    { name: "FAQ", href: "#faq" },
  ];
  
  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Rules", href: "#" },
  ];
  
  const social = [
    { name: "Discord", icon: <Discord size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Naya<span className="text-green-400">Craft</span>
            </h3>
            <p className="text-gray-400 mb-6">
              An immersive Minecraft server featuring unique gameplay experiences, a friendly community, and regular events.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 transition-colors p-2 border border-gray-700 rounded-full"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-green-400">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-green-400">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-green-400">Connect</h3>
            <div className="text-gray-400">
              <p className="mb-2">Server IP: play.nayacraft.com</p>
              <p className="mb-2">Discord: discord.gg/nayacraft</p>
              <p className="mb-2">Email: admin@nayacraft.com</p>
              <p className="pt-4 text-sm text-gray-500">
                Minecraft is a registered trademark of Mojang AB. 
                NayaCraft is not affiliated with Mojang AB.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} NayaCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
