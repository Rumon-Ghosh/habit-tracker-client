import React from "react";
import { Link } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { calculateStreak } from "../utils/habitUtils";

const HabitCard = ({ habit }) => {
  const trackStreak = calculateStreak(habit?.completionHistory || 0)

  return (
    <motion.div
      className="card bg-white shadow-lg border border-purple-200 hover:shadow-xl transition p-2"
      initial={{ opacity: 0, y: 40 }}    
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.5, ease: "linear" }}
    >

      <figure className="aspect-video w-full overflow-hidden rounded-xl">
        <img
          src={habit?.image}
          alt={habit?.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>

      <div className="card-body p-2">
 
        <h2 className="card-title text-xl font-bold text-purple-600">
          {habit?.title}
        </h2>

        <p className="text-gray-600 text-sm mb-3">
          {habit?.description.length > 40
            ? habit?.description.slice(0, 40) + "..."
            : habit?.description}
        </p>

        <div className="flex items-center gap-2 text-sm mb-3">
          <FaUserAlt className="text-purple-500" />
          <span className="text-gray-800">
            <strong>Creator:</strong>{" "}
            {habit?.isPublic ? habit?.userName : null}
          </span>
        </div>

        <div className="flex justify-between items-center">
          {trackStreak > 0 ?
            <div className="badge badge-soft badge-warning">Daily Streak {trackStreak}</div> :
            <div className="badge badge-soft badge-primary">Daily Streak {trackStreak}</div>
          }
          <Link to={`/habit/${habit?._id}`}>
            <button className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HabitCard;
