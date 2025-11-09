import { motion } from "framer-motion";

const FeaturedHabits = () => {
  const habits = [
    {
      title: "Daily Meditation",
      image: "https://i.ibb.co/1fFqQxMn/organic-flat-people-meditating-illustration-23-2148906556.jpg",
      desc: "A calm mind leads to a productive day. Start with 5 minutes.",
    },
    {
      title: "Drink More Water",
      image: "https://i.ibb.co/5XfLK7tv/man-drinking-water-stay-hydrated-flat-simple-vector-illustrations-white-background-1062857-46.jpg",
      desc: "Stay hydrated to boost focus, energy, and health.",
    },
    {
      title: "30-Minute Reading",
      image: "https://i.ibb.co/Qh3YQm0/istockphoto-1368099579-612x612.jpg",
      desc: "Learn something new every day and sharpen your mind.",
    },
  ];

  return (
    <div className="py-16 bg-base-200">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
        Featured Habits to Start Today
      </h2>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {habits.map((habit, index) => (
          <motion.div
            key={index}
            className="card bg-white shadow-xl border border-purple-200 hover:shadow-2xl transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <figure>
              <img src={habit.image} alt={habit.title} className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-xl text-purple-600">{habit.title}</h3>
              <p className="text-gray-600 text-sm">{habit.desc}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedHabits;
