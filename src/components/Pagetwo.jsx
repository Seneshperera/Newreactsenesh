import React from "react";

function PageTwo() {
  return (
    <div
      className="flex flex-col items-center min-h-screen py-10"
      style={{
        backgroundImage: "url('public/project1/Gradient bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="flex flex-row w-full justify-between px-10 mt-10">
        
        <div className="w-1/3 text-left space-y-4 relative">
          <h1 className="text-gray-400 text-2xl">01</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            <br /> Faucibus in libero risus semper habitant arcu eget.
          </p>

          <div className="mt-5">
            <img
              src="public/project1/Explosion.png"
              alt="Explosion"
              className=""
            />
          </div>
          <div>
            
          </div>
          <img
            src="public/project1/Image bottom2.png"
            alt="Bottom Image"
            className="mt-6"
          />
        </div>

        
        <div className="text-center mx-auto">
          <h1 className="text-6xl font-semibold leading-tight">
            Create <br /> Your <br /> Design
          </h1>
          <p className="text-gray-600 font-thin text-xl mt-6 leading-relaxed">
            Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing
            elit. Faucibus <br /> in libero risus semper <br /> habitant arcu
            eget.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition mt-20 w-28">
          Explore
        </button>
        </div>

        
        <div className="relative w-1/3">
          <div className="bg-blue-300 rounded-full w-48 h-48 absolute right-10 top-5"></div>
          <img
            src="public/project1/Image top2.png"
            alt="Top Image"
            className="relative"
          />
        
          <div className="mt-5">
            <img
              src="public\project1\Party.png"
              alt="party"
              className=""
            />
          </div>

          <div className="text-left space-y-4">
          <h1 className="text-gray-400 text-2xl">02</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
            <br /> Faucibus in libero risus semper habitant arcu eget.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
