import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arafat Hossain",
    role: "Software Engineering Student",
    image: "https://i.pravatar.cc/150?img=12",
    feedback:
      "This habit tracker completely changed how I manage my daily routine. The streak system keeps me motivated every single day."
  },
  {
    name: "Nusrat Jahan",
    role: "Fitness Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    feedback:
      "I love how simple yet powerful this app is. Tracking my fitness habits daily has helped me stay consistent without stress."
  },
  {
    name: "Mahmudul Hasan",
    role: "Productivity Coach",
    image: "https://i.pravatar.cc/150?img=45",
    feedback:
      "The clean dashboard and progress tracking make this app stand out. It’s a great tool for anyone trying to build discipline."
  },
  {
  name: "Fardeen khan",
  role: "Banker",
  image: "https://i.pravatar.cc/150?img=64",
  feedback:
    "I really appreciate the smooth user experience and thoughtful layout. Everything feels well-organized and purposeful."
}
];

const Testimonial = () => {
  return (
    <section className="bg-base-200 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            What Our Users Say
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            Hear from users who are building consistency and improving productivity
            with our habit tracker.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-base-100 rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
              />

              <p className="text-base-content/80 mb-4">
                “{testimonial.feedback}”
              </p>

              <h4 className="font-semibold text-base-content">
                {testimonial.name}
              </h4>
              <span className="text-sm text-base-content/60">
                {testimonial.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
