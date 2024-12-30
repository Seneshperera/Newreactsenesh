import React from 'react';

function Pageone() {
  return (
    <div className="flex flex-col md:flex-row p-7 gap-5">
       
      {/* Left Content */}
      <div className="text-left md:w-1/2">
        <h1 className="text-6xl font-normal mb-5">
          Discover.<br />Explore,<br />Inspire.
        </h1>
        <p className="text-gray-600 mb-7 h-10 w-[416px] leading-relaxed text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
          risus semper habitant arcu eget.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition mt-20 w-28">
          Explore
        </button>

        <img
        className='mt-8 ml-20 h-48' 
        src='./project1/Spiral 3.png'
        alt='Sprial3'
        />

      </div>

      <div>
            <img 
            className='mt-8 items-center h-20 w-72 '
            src='./project1/shape wave.png'
            alt='shape wave'
            />
        </div>

      {/* Right Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-4/5">
        <img
          className="h-72 w-96 mt-48 object-cover rounded-lg  "
          src="public\project1\image3.jfif"
          alt="First Image"
        />
        <img
          className="h-72 w-96 mt-24 object-cover rounded-lg "
          src="public\project1\image2.jfif"
          alt="Second Image"
        />
        <img
          className="h-72 w-96 mt-o object-cover rounded-lg "
          src="public\project1\image1.jfif"
          alt="Third Image"
        />
        
        <p className='ml-64  w-80 h-6 text-gray-600'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
      </div>
    </div>
  );
}

export default Pageone;
