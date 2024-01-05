import React from 'react'

const Welcome = () => {
  return (
    <div>
      <p className="text-center font-inter text-5xl mt-9">
        Welcome to Lembranca
      </p>

      <div className="flex flex-row items-center justify-center mt-3">
        <img src="/location_pin.svg" alt="location pin" className="w-4 h-4"/>

        <p className='ml-2'>North Goa</p>
      </div> 

    </div>
  )
}

export default Welcome