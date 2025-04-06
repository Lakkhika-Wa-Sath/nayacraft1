
import { Scissors, Users, Star } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Scissors className="w-10 h-10 text-salon-gold" />,
      title: "Expert Stylists",
      description: "Our team consists of industry professionals with years of experience and training."
    },
    {
      icon: <Users className="w-10 h-10 text-salon-gold" />,
      title: "Personalized Care",
      description: "We create customized treatments tailored to your unique beauty needs."
    },
    {
      icon: <Star className="w-10 h-10 text-salon-gold" />,
      title: "Premium Products",
      description: "We use only the highest quality, sustainable products for all our services."
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="salon-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gold-underline">About Us</span>
          </h2>
          <p className="section-subtitle">
            Welcome to Glow Salon, where beauty meets expertise and luxury.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                alt="Salon Interior"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-salon-gold text-white p-4 rounded-lg shadow-lg">
                <p className="font-playfair text-2xl">15+</p>
                <p className="text-sm uppercase tracking-wider">Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-salon-charcoal">
              Your Beauty Oasis Since 2008
            </h3>
            <p className="text-salon-brown mb-6">
              At Glow Salon, we believe that everyone deserves to feel beautiful and confident. 
              Our salon was founded with a simple mission: to provide exceptional beauty services 
              in a relaxing and luxurious environment.
            </p>
            <p className="text-salon-brown mb-8">
              From the moment you step through our doors, you'll be embraced by our warm atmosphere 
              and attentive staff who are dedicated to ensuring your experience exceeds expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h4 className="font-playfair text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-salon-brown">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
