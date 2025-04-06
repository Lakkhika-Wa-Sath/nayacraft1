
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];
  
  const services = [
    { name: "Hair Styling", href: "#services" },
    { name: "Facial Treatments", href: "#services" },
    { name: "Nail Services", href: "#services" },
    { name: "Massage Therapy", href: "#services" },
    { name: "Makeup", href: "#services" },
  ];
  
  const social = [
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-salon-charcoal text-white">
      <div className="salon-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-playfair text-2xl font-semibold mb-6">
              Glow<span className="text-salon-gold">Salon</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Experience luxury hair and beauty services in a relaxing environment designed to enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-salon-gold transition-colors p-2 border border-gray-700 rounded-full"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-salon-gold">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-salon-gold transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-salon-gold">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-salon-gold transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-salon-gold">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Beauty St, New York, NY 10001</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@glowsalon.com</p>
              <p className="pt-2">
                <span className="block font-medium text-white">Hours:</span>
                Mon-Sat: 9AM-7PM<br />
                Sunday: 10AM-5PM
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} GlowSalon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
