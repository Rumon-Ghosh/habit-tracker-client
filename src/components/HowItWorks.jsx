import { motion } from "framer-motion";
import { FaPlusCircle, FaBell, FaChartPie } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card bg-base-100 shadow-lg border border-purple-200 p-6 text-center"
        >
          <FaPlusCircle className="text-5xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-purple-600 mb-2">1. Add a Habit</h3>
          <p className="text-gray-600">
            Create a new habit with title, reminder time, category, and other useful details.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card bg-base-100 shadow-lg border border-purple-200 p-6 text-center"
        >
          <FaBell className="text-5xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-purple-600 mb-2">2. Get Reminders</h3>
          <p className="text-gray-600">
            Stay consistent with automated reminders that keep you on track every day.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="card bg-base-100 shadow-lg border border-purple-200 p-6 text-center"
        >
          <FaChartPie className="text-5xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-purple-600 mb-2">3. Track Your Progress</h3>
          <p className="text-gray-600">
            See streaks, charts, and milestones that motivate you to build better habits.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default HowItWorks;
