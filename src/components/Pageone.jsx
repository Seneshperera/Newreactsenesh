import React from 'react';

function Pageone() {
  return (
    <div className="flex flex-col md:flex-row p-7 gap-5">
      {/* Left Content */}
      <div className="text-left md:w-1/2">
        <h1 className="text-6xl font-normal mb-5">
          Discover.<br />Explore.<br />Inspire.
        </h1>
        <p className="text-gray-600 mb-7 w-[416px] leading-relaxed text-xl">
        Transform your space with ABC (Pvt) Ltd. We  <br/> create inspiring, personalized designs that  <br/>
        reflect your style. <br/>
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-zinc-700 transition  w-28 shadow-md hover:shadow-lg shadow-black">
          Explore
        </button>

        <img
          className='mt-8 ml-20 h-48' 
          src='./project1/Spiral 3.png'
          alt='Spiral3'
        />
      </div>

      {/* Middle Content */}
      <div className="flex flex-col items-center">
        <img 
          className='h-20 w-72'
          src='./project1/shape wave.png'
          alt='shape wave'
        />
        <img
          className="h-80 w-96 mt-48 object-cover rounded-lg hover:shadow-lg hover:shadow-gray-500 transition-shadow"
          src="public/project1/image3.jfif"
          alt="First Image"
        />
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <img
         src="public/project1/Dawn.png" 
         alt="pattern1" 
         className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-[spin_10s_linear_infinite]'/>
      </div>

      {/* Right Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:w-4/5">
        <img
          className="h-80 w-96 mt-24 object-cover rounded-lg hover:shadow-lg hover:shadow-gray-500 transition-shadow"
          src="public/project1/image2.jfif"
          alt="Second Image"
        />
        <img
          className="h-80 w-96 mt-0 object-cover rounded-lg hover:shadow-lg hover:shadow-gray-500 transition-shadow"
          src="public/project1/image1.jfif"
          alt="Third Image"
        />

      <div className='absolute top-96 right-2 '>
        <img
         src="public/project1/Dawn.png" 
         alt="pattern2" 
         className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-[spin_10s_linear_infinite]'/>
      </div>
        <p className='ml-64 mt-20  w-80 h-6 text-gray-600'>
        Discover tailored design solutions for every space. From single rooms to full home makeovers, we’ve got you covered.
        </p>
      </div>
    </div>
  );
}

export default Pageone;