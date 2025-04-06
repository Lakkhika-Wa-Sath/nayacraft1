
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="salon-container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-playfair text-2xl font-semibold text-salon-charcoal">
            Glow<span className="text-salon-gold">Salon</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-salon-charcoal focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-salon-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+1234567890"
            className="flex items-center text-salon-charcoal hover:text-salon-gold transition-colors"
          >
            <Phone size={16} className="mr-1" />
            <span className="text-sm">123-456-7890</span>
          </a>
          <Button className="bg-salon-gold hover:bg-salon-gold/90 text-white">
            <Calendar size={16} className="mr-1" />
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-salon-charcoal hover:text-salon-gold px-2 py-1"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-salon-gold hover:bg-salon-gold/90 text-white w-full mt-2">
                <Calendar size={16} className="mr-1" />
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
