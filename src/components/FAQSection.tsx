
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I join the server?",
      answer: "You can join our server by using the IP address 'play.nayacraft.com' in your Minecraft client. We support Minecraft Java Edition versions 1.8 to 1.20.4."
    },
    {
      question: "Are there ranks or perks available?",
      answer: "Yes, we offer various ranks with different perks through our web store. These include cosmetic items, special abilities, and quality-of-life features, while maintaining a fair gameplay experience."
    },
    {
      question: "How can I report a player or bug?",
      answer: "You can report players in-game using the /report command or by contacting a staff member. For bugs, please use the #bug-reports channel in our Discord server."
    },
    {
      question: "Do you have anti-cheat protection?",
      answer: "Yes, we use a combination of plugins and staff moderation to ensure a fair gameplay environment. Cheating will result in immediate penalties up to permanent bans."
    },
    {
      question: "How often does the server update?",
      answer: "We update our server to support new Minecraft versions shortly after their stable release. We also regularly update our plugins and features to enhance gameplay."
    },
    {
      question: "How can I apply to join the staff team?",
      answer: "Staff applications open periodically and are announced on our Discord server. Requirements include being at least 16 years old, having experience on the server, and passing an interview process."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-gray-400">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to ask in our Discord server.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-green-400 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
