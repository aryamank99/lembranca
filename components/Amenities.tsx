import React from 'react'

const Amenities = () => {
  return (
    <div>
      <div>
        <p className="text-center font-inter text-5xl mt-14">
          Amenities
        </p>
      </div>

      {/* Main Amenities */}

      <div>
        <p className='lg:flex lg:ml-24 mt-14 text-2xl text-center'>
          General
        </p>
      </div>

      {/* First row */}
      <div className="space-y-10 lg:space-x-20 lg:flex lg:flex-row lg:ml-24 sm:text-center lg:space-y-0  mt-8">
        <div className='flex flex-col items-center'>
          <img src="/top_level_amenities_linens.png" alt="main amenity 1" className="w-12 h-12 object-cover" />
          <p className="text-center mt-2">Towels and Linens</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/top_level_amenities_support.png" alt="main amenity 2" className="w-12 h-12 object-cover" />
          <p className="text-center mt-2">24x7 Support</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/top_level_amenities_wifi.png" alt="main amenity 3" className="w-12 h-12 object-cover" />
          <p className="text-center mt-2">High Speed Wifi</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/top_level_amenities_home_office.png" alt="main amenity 4" className="w-12 h-12 object-cover" />
          <p className="text-center mt-2">Home Office Support</p>
        </div>
      </div>

      {/* Apartment */}
      <p className='lg:flex lg:ml-24 mt-14 text-2xl text-center'>
        Apartment
      </p>
      {/* First row */}
      <div className="space-y-10 flex flex-col lg:space-x-20 lg:flex-row lg:ml-24 sm:text-center lg:space-y-0 mt-8">
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-9 sm:flex-row sm:items-start'>
          <img src="/fridge.png" alt="fridge" className="w-10 h-10 object-cover" />
          <p className="mt-2">Refrigerator</p>
        </div>
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-9 sm:flex-row sm:items-start'>
          <img src="/wifi.png" alt="wifi" className="w-10 h-10 object-cover" />
          <p className="mt-2">High-speed Wifi</p>
        </div>
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-9 sm:flex-row sm:items-start'>
          <img src="/balcony.png" alt="balcony" className="w-10 h-10 object-cover " />
          <p className="mt-2">Balcony</p>
        </div>
      </div>
      
      {/* Second row */}
      <div className="space-y-10 flex flex-col lg:space-x-20 lg:flex-row lg:ml-24 sm:text-center lg:space-y-0 mt-8">
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-8 sm:flex-row sm:items-start'>
          <img src="/microwave.png" alt="microwave" className="w-11 h-10 object-cover" />
          <p className="mt-2">Microwave</p>
        </div>
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-8 sm:flex-row sm:items-start'>
          <img src="/tv.png" alt="tv" className="lg:ml-3 w-10 h-10 object-cover" />
          <p className="mt-2">Television</p>
        </div>
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-9 sm:flex-row sm:items-start'>
          <img src="/doorman.png" alt="doorman" className="lg:ml-12 w-10 h-10 object-cover" />
          <p className="mt-2">Doorman</p>
        </div>
      </div>
      {/* Last row */}
      <div className="space-y-10 flex flex-col lg:space-x-20 lg:flex-row lg:ml-24 sm:text-center lg:space-y-0 mt-8">
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-6 sm:flex-row sm:items-start'>
          <img src="/shower.png" alt="shower" className="lg:mr-1 w-12 h-12 object-cover" />
          <p className="mt-2">Shower</p>
        </div>
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-8 sm:flex-row sm:items-start'>
          <img src="/ac.png" alt="ac" className="lg:ml-8 w-12 h-12 object-cover" />
          <p className="mt-2">Air Conditioning</p>
        </div>
      </div>
      
      {/* Building */}
      <p className='lg:flex lg:ml-24 mt-14 text-2xl text-center'>
        Building
      </p>
      {/* First row */}
      <div className="space-y-10 flex flex-col lg:space-x-20 lg:flex-row lg:ml-24 sm:text-center lg:space-y-0 mt-8">
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-9 sm:flex-row sm:items-start'>
          <img src="/elevator.png" alt="elevator" className="w-10 h-10 object-cover" />
          <p className="mt-2">Elevator</p>
        </div>
        <div className='sm:space-x-0 flex flex-col items-center lg:space-x-9 sm:flex-row sm:items-start'>
          <img src="/parking.png" alt="parking" className="lg:ml-7 w-10 h-10 object-cover" />
          <p className="mt-2">Parking</p>
        </div>
      </div>
    </div>
  )
}

export default Amenities