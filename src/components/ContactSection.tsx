
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={18} />,
      title: "Phone",
      details: "(123) 456-7890",
      action: "tel:+11234567890",
    },
    {
      icon: <Mail size={18} />,
      title: "Email",
      details: "info@glowsalon.com",
      action: "mailto:info@glowsalon.com",
    },
    {
      icon: <MapPin size={18} />,
      title: "Location",
      details: "123 Beauty St, New York, NY 10001",
      action: "https://maps.google.com",
    },
    {
      icon: <Clock size={18} />,
      title: "Hours",
      details: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="salon-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gold-underline">Contact Us</span>
          </h2>
          <p className="section-subtitle">
            Have questions or ready to book an appointment? Get in touch with us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-salon-cream p-8 rounded-lg shadow-sm">
            <h3 className="font-playfair text-2xl mb-6 text-salon-charcoal">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-salon-beige/50 focus:border-salon-gold focus:ring-salon-gold/30"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-salon-beige/50 focus:border-salon-gold focus:ring-salon-gold/30"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white border-salon-beige/50 focus:border-salon-gold focus:ring-salon-gold/30"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="service">Service Interested In</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 bg-white border rounded-md border-salon-beige/50 focus:outline-none focus:border-salon-gold focus:ring-1 focus:ring-salon-gold/30"
                >
                  <option value="">Select a service</option>
                  <option value="hair">Hair Services</option>
                  <option value="facial">Facial Treatments</option>
                  <option value="nails">Nail Services</option>
                  <option value="massage">Massage Therapy</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white border-salon-beige/50 focus:border-salon-gold focus:ring-salon-gold/30"
                ></Textarea>
              </div>
              
              <Button type="submit" className="bg-salon-gold hover:bg-salon-gold/90 text-white w-full">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 bg-salon-cream/50 rounded-lg border border-salon-beige/30"
                >
                  <div className="mr-4 p-3 bg-salon-gold text-white rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-charcoal">{item.title}</h4>
                    {item.action ? (
                      <a 
                        href={item.action} 
                        className="text-salon-brown hover:text-salon-gold transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-salon-brown">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <div className="rounded-lg overflow-hidden h-64 border border-salon-beige/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-74.11976373946234!3d40.69766374932578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1631541474583!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
