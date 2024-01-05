import React from 'react'

const Amenities = () => {
  return (
    <div>
      <div>
        <p className="text-center font-inter text-5xl mt-14">
          Amenities
        </p>
      </div>

      {/* Main Amenities Title */}
      <p className='ml-24 mt-14 text-2xl'>
        General
      </p>
      {/* First row */}
      <div className="flex space-x-20 mt-8 ml-24">
        <div>
          <img src="/top_level_amenities_linens.png" alt="main amenity 1" className="w-12 h-12 object-cover ml-10" />
          <p className="text-center mt-2">Towels and Linens</p>
        </div>
        <div>
          <img src="/top_level_amenities_support.png" alt="main amenity 2" className="w-12 h-12 object-cover ml-8" />
          <p className="text-center mt-2">24x7 Support</p>
        </div>
        <div>
          <img src="/top_level_amenities_wifi.png" alt="main amenity 3" className="w-12 h-12 object-cover ml-10" />
          <p className="text-center mt-2">High Speed Wifi</p>
        </div>
        <div>
          <img src="/top_level_amenities_home_office.png" alt="main amenity 4" className="w-12 h-12 object-cover ml-12" />
          <p className="text-center mt-2">Home Office Support</p>
        </div>
      </div>

      {/* Apartment Title */}
      <p className='ml-24 mt-14 text-2xl'>
        Apartment
      </p>
      {/* First row */}
      <div className="flex space-x-20 mt-8 ml-24 w-screen">
        <div className='flex items-center space-x-9'>
          <img src="/fridge.png" alt="fridge" className="w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">Refrigerator</p>
        </div>
        <div className='flex items-center space-x-9'>
          <img src="/wifi.png" alt="wifi" className="w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">High-speed Wifi</p>
        </div>
        <div className='flex items-center space-x-9'>
          <img src="/balcony.png" alt="balcony" className="w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">Balcony</p>
        </div>
      </div>
      {/* Second row */}
      <div className="flex space-x-20 mt-10 ml-24 w-screen">
        <div className='flex items-center space-x-8'>
          <img src="/microwave.png" alt="microwave" className="w-11 h-10 object-cover" />
          <p className="text-center w-full mt-2">Microwave</p>
        </div>
        <div className='flex items-center space-x-8'>
          <img src="/tv.png" alt="tv" className="ml-3 w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">Television</p>
        </div>
        <div className='flex items-center space-x-8'>
          <img src="/doorman.png" alt="doorman" className="ml-11 w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">Doorman</p>
        </div>
      </div>
      {/* Last row */}
      <div className="flex space-x-20 mt-10 ml-24 w-screen">
        <div className='flex items-center space-x-8'>
          <img src="/shower.png" alt="shower" className="w-12 h-12 object-cover" />
          <p className="text-center w-full mt-2">Shower</p>
        </div>
        <div className='flex items-center space-x-8'>
          <img src="/ac.png" alt="ac" className="ml-7 w-12 h-12 object-cover" />
          <p className="text-center w-full mt-2">Air Conditioning</p>
        </div>
      </div>
      
      {/* Building Title */}
      <p className='ml-24 mt-14 text-2xl'>
        Building
      </p>
      {/* First row */}
      <div className="flex space-x-20 mt-8 ml-24 w-screen">
        <div className='flex items-center space-x-9'>
          <img src="/elevator.png" alt="elevator" className="w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">Elevator</p>
        </div>
        <div className='flex items-center space-x-9'>
          <img src="/parking.png" alt="parking" className="ml-7 w-10 h-10 object-cover" />
          <p className="text-center w-full mt-2">Parking</p>
        </div>
      </div>
    </div>
  )
}

export default Amenities