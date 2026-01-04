import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does habit streak tracking work?",
    answer:
      "Each time you mark a habit as complete, the system records the date. Your streak increases when you complete a habit on consecutive days without skipping."
  },
  {
    question: "Can I edit or delete a habit after creating it?",
    answer:
      "Yes. You can update or delete your habits anytime from the dashboard. Your changes are saved instantly and reflected across the app."
  },
  {
    question: "What happens if I miss a day?",
    answer:
      "If you miss a day, your current streak resets. However, your overall completion history remains saved so you can track long-term progress."
  },
  {
    question: "Are public habits visible to everyone?",
    answer:
      "Yes. Public habits can be browsed by all users. Private habits are visible only to you and remain fully secure."
  },
  {
    question: "Is my personal data safe on this platform?",
    answer:
      "Absolutely. We use secure authentication and protected routes to ensure your personal information and habits remain private."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-base-100 py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-base-content">
            Everything you need to know about building and tracking habits.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-base-300 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left text-base-content font-medium hover:bg-base-200 transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-base-content/80"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
