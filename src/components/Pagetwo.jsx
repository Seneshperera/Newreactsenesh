import React from "react";

function PageTwo() {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row w-full justify-between mt-10 space-y-10 md:space-y-0 px-8">
        
        {/* Left Content */}
        <div className="w-full md:w-1/3 text-left space-y-4 relative">
          <h1 className="text-gray-400 text-2xl">01</h1>
          <p className="text-gray-700">
          <span className="font-bold">Personalized Design</span><br />
          We craft designs that match your unique style and needs.
          </p>

          <div className="mt-5 ">
            <img
              src="/public/project1/Explosion.png"
              alt="Explosion"
              className="w-auto"
            />
          </div>

          <img
            src="/public/project1/Image bottom2.png"
            alt="Bottom Image"
            className="mt-6 w-full hover:shadow-lg hover:shadow-gray-500 transition-shadow"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-5 md:px-10 relative">
          
          <div
            style={{
              backgroundImage: "url('/public/project1/Gradient bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1, 
            }}
          ></div>

          {/* Content div */}
          <div className="text-center mx-auto relative z-10">
            <h1 className="text-7xl font-semibold leading-tight ">
              Create <br /> Your <br /> Design
            </h1>
            <p className="text-gray-600 font-thin text-lg md:text-xl mt-6 ">
            Turn your vision into reality. We create personalized spaces that reflect your unique style.
            </p>
            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition mt-10 md:mt-20 w-28 shadow-md hover:shadow-lg shadow-black">
              Explore
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/3 relative">
          
          <img
            src="/public/project1/Image top2.png"
            alt="Top Image"
            className="relative w-full hover:shadow-lg hover:shadow-gray-500 transition-shadow"
          />

          <div className="mt-5">
            <img
              src="/public/project1/Party.png"
              alt="Party"
              className="w-auto"
            />
          </div>

          <div className="text-left space-y-4 mt-5">
            <h1 className="text-gray-400 text-2xl">02</h1>
            <p className="text-gray-700">
              <span className="font-bold">Innovative Solutions</span><br />
            We use the latest trends and  <br /> technologies to create modern, {" "}
              <br /> functional spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;