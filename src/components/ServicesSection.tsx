
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("hair");
  
  const services = {
    hair: [
      { name: "Women's Haircut & Style", price: "$65+", description: "Includes consultation, shampoo, cut, and style" },
      { name: "Men's Haircut", price: "$40+", description: "Includes consultation, shampoo, cut, and style" },
      { name: "Hair Coloring", price: "$85+", description: "Full color application with premium products" },
      { name: "Highlights", price: "$95+", description: "Partial or full highlights customized to your preference" },
      { name: "Balayage", price: "$150+", description: "Hand-painted highlights for a natural, sun-kissed look" },
      { name: "Blow Dry & Style", price: "$45+", description: "Professional blow dry with styling" }
    ],
    facial: [
      { name: "Classic Facial", price: "$75", description: "Cleansing, exfoliation, extraction, and hydration" },
      { name: "Anti-Aging Facial", price: "$95", description: "Targets fine lines and wrinkles with premium products" },
      { name: "Hydrating Facial", price: "$85", description: "Deep hydration for dry or mature skin" },
      { name: "Acne Treatment", price: "$90", description: "Specialized treatment for problematic skin" },
      { name: "Men's Facial", price: "$75", description: "Tailored to men's specific skincare needs" }
    ],
    nails: [
      { name: "Manicure", price: "$35", description: "Nail shaping, cuticle care, hand massage, and polish" },
      { name: "Pedicure", price: "$45", description: "Foot soak, exfoliation, nail care, and polish" },
      { name: "Gel Manicure", price: "$50", description: "Long-lasting gel polish that stays perfect for weeks" },
      { name: "Gel Pedicure", price: "$60", description: "Long-lasting gel polish for toes" },
      { name: "Nail Art", price: "$10+", description: "Custom designs for a unique look" }
    ],
    massage: [
      { name: "Swedish Massage", price: "$85/60min", description: "Relaxing massage to ease tension and improve circulation" },
      { name: "Deep Tissue Massage", price: "$95/60min", description: "Targets deeper muscle layers for chronic tension" },
      { name: "Hot Stone Massage", price: "$110/60min", description: "Uses heated stones to relax muscles deeply" },
      { name: "Aromatherapy Massage", price: "$90/60min", description: "Essential oils enhance the therapeutic benefits" },
      { name: "Couples Massage", price: "$170/60min", description: "Share the relaxation experience with someone special" }
    ]
  };

  return (
    <section id="services" className="py-20 bg-salon-cream">
      <div className="salon-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gold-underline">Our Services</span>
          </h2>
          <p className="section-subtitle">
            Discover our range of premium beauty and wellness services designed to enhance your natural beauty
          </p>
        </div>
        
        <Tabs defaultValue="hair" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="w-full flex justify-center mb-10">
            <TabsTrigger value="hair" className="text-md px-6">Hair</TabsTrigger>
            <TabsTrigger value="facial" className="text-md px-6">Facial</TabsTrigger>
            <TabsTrigger value="nails" className="text-md px-6">Nails</TabsTrigger>
            <TabsTrigger value="massage" className="text-md px-6">Massage</TabsTrigger>
          </TabsList>
          
          {Object.keys(services).map((category) => (
            <TabsContent key={category} value={category} className="focus-visible:outline-none">
              <div className="grid md:grid-cols-2 gap-6">
                {services[category as keyof typeof services].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm border border-salon-beige/30 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-playfair text-xl text-salon-charcoal">{service.name}</h3>
                      <span className="text-salon-gold font-semibold">{service.price}</span>
                    </div>
                    <p className="text-salon-brown text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="bg-salon-gold hover:bg-salon-gold/90 text-white px-8 py-6">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
