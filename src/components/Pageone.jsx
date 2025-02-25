import React from 'react';

function Pageone() {
  return (
    <div className="flex flex-col md:flex-row p-3 xs:p-4 sm:p-5 md:p-7 gap-3 xs:gap-4 sm:gap-5">
      {/* Left Content */}
      <div className="text-left md:w-1/3">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal mb-3 xs:mb-4 sm:mb-5">
          Discover.<br />Explore.<br />Inspire.
        </h1>
        <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-7 text-base xs:text-lg sm:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xs lg:w-[416px] leading-relaxed">
          Transform your space with ABC (Pvt) Ltd. We create inspiring, personalized designs that 
          reflect your style.
        </p>
        <button className="bg-black text-white py-1.5 xs:py-2 px-3 xs:px-4 rounded-full hover:bg-zinc-700 transition w-24 xs:w-28 shadow-md hover:shadow-lg shadow-black">
          Explore
        </button>

        <img
          className="mt-4 xs:mt-6 sm:mt-8 mx-auto md:mx-0 md:ml-10 lg:ml-20 h-24 xs:h-32 sm:h-40 md:h-36 lg:h-48" 
          src="./project1/Spiral 3.png"
          alt="Spiral3"
        />
      </div>

      {/* Middle Content */}
      <div className="flex flex-col items-center md:w-1/3">
        <img 
          className="h-12 xs:h-16 sm:h-20 md:h-16 lg:h-20 w-48 xs:w-56 sm:w-64 md:w-56 lg:w-72"
          src="./project1/shape wave.png"
          alt="shape wave"
        />
        <img
          className="h-80 w-96 mt-48 object-cover rounded-lg hover:shadow-lg hover:shadow-gray-500 transition-shadow"
          src="./project1/image3.jfif"
          alt="First Image"
        />
      </div>

      {/* Center Pattern - Hidden on Mobile and Tablet */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
         src="./project1/Dawn.png" 
         alt="pattern1" 
         className="w-24 md:w-28 lg:w-40 animate-[spin_10s_linear_infinite]"/>
      </div>

      {/* Right Content */}
      <div className="md:w-1/3">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
          <img
            className="h-80 w-96 mt-24 object-cover rounded-lg hover:shadow-lg hover:shadow-gray-500 transition-shadow"
            src="./project1/image2.jfif"
            alt="Second Image"
          />
          <img
            className="h-80 w-96 object-cover rounded-lg hover:shadow-lg hover:shadow-gray-500 transition-shadow"
            src="./project1/image1.jfif"
            alt="Third Image"
          />
        </div>

        {/* Bottom Right Pattern - Hidden on Mobile and Tablet */}
        <div className="hidden lg:block absolute bottom-24 right-4 lg:top-96 lg:right-2">
          <img
           src="./project1/Dawn.png" 
           alt="pattern2" 
           className="w-24 md:w-28 lg:w-40 animate-[spin_10s_linear_infinite]"/>
        </div>

        <p className="text-gray-600 mt-4 xs:mt-8 sm:mt-12 md:mt-10 lg:mt-20 md:text-right mx-auto md:mr-0 text-xs xs:text-sm md:text-sm lg:text-base max-w-xs md:max-w-sm">
          Discover tailored design solutions for every space. From single rooms to full home makeovers, we've got you covered.
        </p>
      </div>
    </div>
  );
}

export default Pageone;
