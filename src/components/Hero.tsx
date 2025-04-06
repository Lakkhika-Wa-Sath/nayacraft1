
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-salon-cream overflow-hidden"
      style={{
        background: `linear-gradient(to right, rgba(229, 223, 217, 0.9), rgba(254, 247, 230, 0.8)), url('https://images.unsplash.com/photo-1607008829749-c0f284a49b23?q=80&w=1920&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="salon-container py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-salon-charcoal fade-in">
            Discover Your Natural Beauty at <span className="text-salon-gold">Glow Salon</span>
          </h1>
          <p className="text-salon-brown text-lg md:text-xl mb-8 fade-in fade-in-delay-1">
            Experience the perfect blend of luxury and care in our premium beauty salon. 
            Our expert stylists are dedicated to bringing out your inner glow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in fade-in-delay-2">
            <Button size="lg" className="bg-salon-gold hover:bg-salon-gold/90 text-white px-8 py-6">
              <Calendar size={18} className="mr-2" />
              Book an Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-salon-gold text-salon-gold hover:bg-salon-gold/10 px-8 py-6">
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
