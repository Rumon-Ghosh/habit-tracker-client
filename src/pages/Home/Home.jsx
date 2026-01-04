import React from "react";
import MySlider from "../../components/MySlider";
import WhyBuildHabits from "../../components/WhyBuildHabits";
import HowItWorks from "../../components/HowItWorks";
import FeaturedHabits from "../../components/FeaturedHabits";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import Newsletter from "../../components/Newsletter";
import FeatureCard from "../../components/FeatureCard";
import FAQ from "../../components/FAQ.JSX";
import Testimonial from "../../components/Testimonial";
import ProductivityStats from "../../components/ProductivityStats";

const Home = () => {
  const latestHabits = useLoaderData();
  // console.log(latestHabits)
  return (
    <div>
      <div>
        <Banner></Banner>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Habits to Start Today</h1>
        <p className="mb-10 text-center text-lg font-medium">See what others are building today — start your journey with fresh motivation!</p>
        <div className="w-11/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {latestHabits.map((habit) => (
            <FeatureCard key={habit._id} habit={habit}></FeatureCard>
          ))}
        </div>
        <MySlider></MySlider>
        <WhyBuildHabits></WhyBuildHabits>
        <HowItWorks></HowItWorks>
        <FeaturedHabits></FeaturedHabits>
        <ProductivityStats></ProductivityStats>
        <Testimonial></Testimonial>
        <FAQ></FAQ>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
