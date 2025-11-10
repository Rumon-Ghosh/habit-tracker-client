import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LoadingPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <div className='flex-1 flex justify-center items-center'>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoadingPage;