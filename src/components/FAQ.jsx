import React from 'react';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqs = [
    { id: 'first', question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a variety of award-winning TV shows, movies, anime, and more.' },
    { id: 'second', question: 'How much does Netflix cost?', answer: 'Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.' },
    { id: 'third', question: 'Where can I watch?', answer: 'Watch anywhere, anytime on any internet-connected device.' },
    { id: 'fourth', question: 'How do I cancel?', answer: 'You can cancel anytime online. No contracts, no commitments.' },
    { id: 'fifth', question: 'What can I watch on Netflix?', answer: 'Netflix offers an extensive library of TV shows, movies, documentaries, and more.' },
    { id: 'sixth', question: 'Is Netflix good for Kids?', answer: 'Netflix offers a safe kids section with parental controls.' },
  ];

  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-4xl text-center font-semibold mb-6">Frequently Asked Questions</h2>
      <ul className="space-y-2">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
