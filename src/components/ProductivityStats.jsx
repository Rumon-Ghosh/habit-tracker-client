import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "12,000+",
    label: "Habits Completed",
    description: "Users consistently complete daily habits using our platform."
  },
  {
    value: "4,500+",
    label: "Active Users",
    description: "People actively tracking habits and building routines."
  },
  {
    value: "18 Days",
    label: "Average Streak",
    description: "Average consecutive days users maintain their habits."
  },
  {
    value: "92%",
    label: "Consistency Rate",
    description: "Users who stay consistent after the first week."
  }
];

const ProductivityStats = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            Helping thousands of users build consistency and achieve their goals
            through simple daily habits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-base-200 rounded-2xl p-6 text-center shadow-md"
            >
              <h3 className="text-4xl font-extrabold text-primary mb-2">
                {stat.value}
              </h3>
              <h4 className="text-lg font-semibold text-base-content">
                {stat.label}
              </h4>
              <p className="mt-2 text-sm text-base-content/70">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductivityStats;
