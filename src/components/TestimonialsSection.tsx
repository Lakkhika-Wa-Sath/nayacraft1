
import { useState } from "react";
import { StarIcon, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Regular Client",
      content:
        "I've been coming to Glow Salon for over 2 years now, and I've never been disappointed. The stylists are incredibly talented and always make me feel beautiful. The atmosphere is so relaxing, I look forward to every appointment!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      role: "New Client",
      content:
        "First time at Glow Salon and I'm already planning my next visit! The attention to detail and personalized service really sets them apart. My haircut looks amazing and the scalp massage was an unexpected treat.",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      role: "Regular Client",
      content:
        "I recently had my wedding hair and makeup done at Glow Salon and I couldn't have been happier. They listened carefully to what I wanted and created a look that made me feel confident and beautiful on my special day.",
      rating: 5,
    },
    {
      name: "David Wilson",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      role: "Client",
      content:
        "Great service, professional atmosphere. The massage therapy here is exceptional - I come in with terrible back pain and leave feeling like a new person. Highly recommend the deep tissue massage!",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-salon-cream">
      <div className="salon-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gold-underline">What Our Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Read what our valued clients have to say about their experiences at
            Glow Salon
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-salon-beige/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-salon-gold shadow-md"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={18}
                      className={
                        i < testimonials[activeIndex].rating
                          ? "text-salon-gold"
                          : "text-gray-300"
                      }
                      fill={
                        i < testimonials[activeIndex].rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <blockquote className="text-salon-brown italic mb-4">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                <p className="font-playfair text-lg text-salon-charcoal font-medium">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-salon-brown">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === activeIndex
                    ? "bg-salon-gold"
                    : "bg-salon-beige hover:bg-salon-gold/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-salon-beige hover:bg-salon-gold hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-salon-beige hover:bg-salon-gold hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
