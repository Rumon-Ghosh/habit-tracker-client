import React from "react";
import MySlider from "../../components/MySlider";
import WhyBuildHabits from "../../components/WhyBuildHabits";
import HowItWorks from "../../components/HowItWorks";
import FeaturedHabits from "../../components/FeaturedHabits";
import { useLoaderData } from "react-router";
import HabitCard from "../../components/HabitCard";
import Banner from "../../components/Banner";

const Home = () => {
  const latestHabits = useLoaderData();
  // console.log(latestHabits)
  return (
    <div>
      <div>
        <Banner></Banner>
        <MySlider></MySlider>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-600">Newest Habit Inspirations</h1>
        <p className="mb-10 text-center text-lg font-medium">See what others are building today — start your journey with fresh motivation!</p>
        <div className="w-11/12 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestHabits.map((habit) => (
            <HabitCard key={habit._id} habit={habit}></HabitCard>
          ))}
        </div>
        <WhyBuildHabits></WhyBuildHabits>
        <HowItWorks></HowItWorks>
        <FeaturedHabits></FeaturedHabits>
      </div>
    </div>
  );
};

export default Home;
