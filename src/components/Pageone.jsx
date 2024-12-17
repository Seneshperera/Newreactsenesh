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
          src="https://s3-alpha-sig.figma.com/img/bb56/c9f9/8a11064597590f47810a70a26aaf222e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~NZQjaJnwwMK~TQhpcPcqFO75LsFPYSZ6PVmOqjhU33eQayiM4-DdOvuolOvxZw~u8x8PFAhIFQeyXgpx1eZnRbl48As~S5V3e3u09xwb1S2hCzCvslsf12qFhNs4FiBY1Az84ef2M~bpK9P~4EYCZavs9YvNYVFTh1oFPIKCmDw2CxA4BCrgHQIul2otGXnfdmyqqNvNGEvOCD3wuBiH9GvyIggrsOubMsOGQwUVHu~am8PDnwhI8TFhAAGEogGSWtLYZHgK2pRzHMDH7qpKd6s4MYPNgjIqA4j1-Eatorx7El498vijDD~vNeOTSd3lsmpmKewq-pE2GMwkBINA__"
          alt="First Image"
        />
        <img
          className="h-72 w-96 mt-24 object-cover rounded-lg "
          src="https://s3-alpha-sig.figma.com/img/a685/5b3e/64834c741f31293823bed6e85d2dd334?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6RYr8UZmNW~KLHjYi0wjH3poJ~Ik7hnB-A-lY9ZcJfTU0lCMTuMaTu5UsjQyy9h5keul7GN4zEHuETBkyhFOME2QNtml3eABXHyVoKKRIEmEbp~rDCcrs2uQ~AJwtXmXbmriTftRcm8GlmyiWLqtf53bde~XjYagRMlVdFi~XcM9rQW3e3RGw5vOBr31jNbOiAtPiXDSngBONrb4jF-iHIuLtxnKy~kph~9YROkLiVFSh60aISaMsQSYko2VH9EuZTxUT9tvBqFFMsR-I3A9fxBr-TT9ib3f20ZrSoPShiHEwNW6~DN3d3iZJZM5ZQVYjZ-s7uCWJy~fGSfJBzeCA__"
          alt="Second Image"
        />
        <img
          className="h-72 w-96 mt-o object-cover rounded-lg "
          src="https://s3-alpha-sig.figma.com/img/3d12/ad1b/b186ce86b10adfdb112d5157d3b92f4f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3pkYsRL5l9R2vfdi1E6-lZWV7YpVbjlWuSp5g4W3gWy5guzJQQoCz-Q5HlwJd9Vg0EVPMkKKFtkp4QxY2AZrOvTcnYfh4e3LMKQfhh22u~3VMK~vOcbEZrH3kxu-FgKmqTHAVdhHvmk3dT6MS58ghbsBPe77hIC3OYYDHMN3BUDa-7h9j~QfBHZ6D0bohzufSM8~wRibvQ-OZyThMtwoRq64N5Ba3~4waa2ipUP6NEgG4Sg4BwTIaSic-S85xn768XvgeS2JraeHoEWhbRB5gCnEhevGVMorRj3wJnmSRW-lV24riFHs6PHY38ZC1J2JNgxt0-vXVG3MkVNv3yy8w__"
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
