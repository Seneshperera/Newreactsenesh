import React from 'react'

function pagetwo() {
  return (
    <div className='h-screen bg-cover bg-center bg-[url("./project1/Gradient bg.png")]'>

        <div className='text-left ml-10'>
            <h1 className='text-gray-400'>01</h1>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.<br/> Faucibus in libero
            risus semper habitant arcu eget.</p>
        </div>

      <div>
        <h1 className='text-6xl text-center font-semibold mt-30'>Create <br/> Your <br/> Deisgn</h1>
        <p className="text-gray-600 font-thin text-center text-xl mt-6">
          Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit. Faucibus <br/> in libero
          risus semper <br/> habitant arcu eget.
        </p>
        <div className='flex justify-center '>
        <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition mt-10 w-28 items-center">
          Explore
        </button>
        </div>

        <div className='flex justify-end mr-10 pb-5'>
        <div className='text-left justify-end'>
            <h1 className='text-gray-400'>02</h1>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Faucibus in libero
            risus semper habitant arcu eget.</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default pagetwo
