import React from 'react';
import MySlider from '../../components/MySlider';
import WhyBuildHabits from '../../components/WhyBuildHabits';
import HowItWorks from '../../components/HowItWorks';
import FeaturedHabits from '../../components/FeaturedHabits';

const Home = () => {
  return (
    <div>
      <div>
        <MySlider></MySlider>
        <WhyBuildHabits></WhyBuildHabits>
        <HowItWorks></HowItWorks>
        <FeaturedHabits></FeaturedHabits>
      </div>
    </div>
  );
};

export default Home;