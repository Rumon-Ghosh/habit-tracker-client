import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import LoadingSpinner from "../../components/LoadingSpinner";
import toast from "react-hot-toast";
import { calculateProgress, calculateStreak } from "../../utils/habitUtils";
import { AuthContext } from "../../AuthContext/AuthContext";

const HabitDetails = () => {
  const { user } = use(AuthContext);
  const [habit, setHabit] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const streak = calculateStreak(habit?.completionHistory || []);
  const progress = calculateProgress(habit?.completionHistory || []);

  useEffect(() => {
    setLoading(true);
    fetch(`https://habit-tracker-server-chi.vercel.app/habits/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      });
  }, [id, user, refetch]);

  const updateStreak = (id) => {
    fetch(`https://habit-tracker-server-chi.vercel.app/habits/${id}/complete`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Completed today streak!");
          setRefetch(!refetch);
        }
        if (data.message) {
          toast.error("Already completed today");
        }
      })
      .catch((err) => toast.error("Something went wrong.", err.message));
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <title>Habit Details</title>
      <h2 className="text-2xl md:text-3xl text-center font-bold text-purple-600 mb-4">
        Build Good Habits That's Will Lead You To The Next Level
      </h2>
      <p className="text-center mb-4 text-lg text-gray-800 max-w-[750px] mx-auto">
        Habits shape who we become. By focusing on small, consistent actions,
        you unlock long-term growth, improved focus, reduced stress, and a more
        balanced lifestyle.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto shadow-lg rounded-2xl p-3 md:p-6 bg-white"
      >
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <img
            src={habit?.image}
            alt={habit?.title}
            className="w-full h-3/4 md:w-1/2 rounded-2xl object-cover mx-auto"
          />
        </div>

        <h1 className="text-3xl font-bold mt-4 text-purple-700">
          {habit.title}
        </h1>
        <p className="text-md text-gray-600 mt-2">{habit?.description}</p>

        <span className="inline-block mt-3 px-4 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
          {habit?.category}
        </span>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-semibold text-lg text-purple-700">
            {streak}-day streak
          </span>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-gray-700 mb-1">
            30-Day Progress: {progress}%
          </p>

          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className="h-3 bg-purple-600"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
          <p className="text-sm text-gray-600">Created by:</p>
          <p className="font-bold text-purple-700 text-lg">{habit?.userName}</p>
          <p className="text-gray-500">{habit?.userEmail}</p>
        </div>

        <button
          onClick={() => updateStreak(habit?._id)}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 cursor-pointer text-white py-3 rounded-xl text-lg font-bold shadow-md"
        >
          ✅ Mark Complete
        </button>
      </motion.div>
    </div>
  );
};

export default HabitDetails;
