import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    toast.success(`Thanks ${email} connected with us !`)
    e.target.reset()
  }
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-8 md:py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Connected with <span className="text-yellow-300">HabitFlow</span>
        </h2>
        <p className="text-lg/6 opacity-90 mb-8">
          Subscribe to our newsletter and get the latest updates, habit tips, and
          motivational content right in your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered w-full md:w-2/3 text-gray-800 bg-white"
            required
          />
          <button
            type="submit"
            className="btn bg-yellow-400 hover:bg-yellow-500 border-none text-purple-800 font-semibold px-6"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm mt-4 opacity-80">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;
