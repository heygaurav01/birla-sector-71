import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the RERA registration number?',
      answer: 'Birla Pravaah is registered under RERA with registration number RC/REP/HARERA/GGM/1006/738/2025/109.',
    },
    {
      question: 'What are the available configurations?',
      answer: 'We offer spacious 3 BHK and 3.5 BHK luxury apartments ranging from 2000 to 2500 sq. ft.',
    },
    {
      question: 'What is the possession timeline?',
      answer: 'The project is scheduled for possession in December 2028. Construction is progressing as per schedule.',
    },
    {
      question: 'What payment plans are available?',
      answer: 'We offer flexible payment plans including the special 20x5 plan where you pay 20% now and balance over 5 years. Construction-linked payment plans are also available.',
    },
    {
      question: 'Is home loan assistance available?',
      answer: 'Yes, we have tie-ups with leading banks and financial institutions to provide home loan assistance at competitive interest rates.',
    },
    {
      question: 'What amenities are included?',
      answer: 'The project features 15+ premium amenities including a modern gymnasium, swimming pool, clubhouse, landscaped gardens, kids play area, and 24x7 security.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Birla Pravaah
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-lg px-6 border-none animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
