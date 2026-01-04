import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mb-8 md:mb-15 md:mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl text-center md:text-start font-extrabold text-purple-700 leading-tight">
          Build Better Habits With{" "} <br />
          <span className="text-green-600">
            <Typewriter
              words={["Consistency", "Clarity", "Daily Actions"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="mt-4 text-lg text-center md:text-start">
          Turn small steps into big results. Track your progress, stay motivated,
          and become the best version of yourself—one habit at a time.
        </p>

        <Link to="/all-habits" className="mt-6 px-6 py-3 block bg-purple-600 hover:bg-purple-700 text-center text-white font-semibold rounded-xl shadow-md">
          Explore Habits
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex justify-center"
      >
        <img
          src="https://i.ibb.co/WW81NNLT/create-good-habits-text-red-underline-light-blue-background-69917306.webp"
          alt="Habit Illustration"
          className="w-full md:max-w-lg rounded-2xl shadow-lg"
        />
      </motion.div>

    </div>
  );
};

export default Banner;
