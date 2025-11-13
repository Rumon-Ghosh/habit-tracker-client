import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { calculateStreak } from "../utils/habitUtils"; // your existing streak utility

const FeatureCard = ({ habit }) => {
  const trackStreak = calculateStreak(habit?.completionHistory || []);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-purple-100 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <div className="relative w-full h-52 overflow-hidden">
        <motion.img
          src={habit?.image}
          alt={habit?.title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          whileHover={{ scale: 1.05 }}
        />
        {trackStreak > 0 && (
          <span className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            🔥 {trackStreak} Day Streak
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold text-purple-600 mb-2">
            {habit?.title}
          </h2>

          <p className="text-gray-600 text-sm mb-3">
            {habit?.description.length > 50
              ? habit?.description.slice(0, 40) + "..."
              : habit?.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <MdCategory className="text-purple-500" />
            <span>{habit?.category}</span>
          </div>

          {habit?.userName && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaUserAlt className="text-purple-500" />
              <span>
                <strong>Creator:</strong> {habit.isPublic ? habit?.userName : "Private Habit"}
              </span>
            </div>
          )}
        </div>

        <div className="mt-2 flex justify-between items-center">
          <span className="text-xs text-gray-500">
            Created: {new Date(habit?.createdAt).toLocaleDateString()}
          </span>
          <Link to={`/habit/${habit?._id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
