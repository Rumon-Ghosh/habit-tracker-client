import React from "react";
import { Link } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HabitCard = ({ habit }) => {

  return (
    <motion.div
      className="card bg-white shadow-lg border border-purple-200 hover:shadow-xl transition p-3"
      initial={{ opacity: 0, y: 40 }}    
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.5, ease: "linear" }}
    >

      <figure>
        <img
          src={habit?.image}
          alt={habit?.title}
          className="w-full h-60 object-cover rounded-xl"
        />
      </figure>

      <div className="card-body p-4">
 
        <h2 className="card-title text-xl font-bold text-purple-600">
          {habit?.title}
        </h2>

        <p className="text-gray-600 text-sm mb-3">
          {habit?.description.length > 40
            ? habit?.description.slice(0, 40) + "..."
            : habit?.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
          <FaUserAlt className="text-purple-500" />
          <span>
            <strong>Creator:</strong>{" "}
            {habit?.isPublic ? habit?.userName : null}
          </span>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/habit/${habit?._id}`}>
            <button className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HabitCard;
