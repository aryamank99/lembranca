import React from 'react'

const LastSection = () => {
  return (
    <div>
      <div>
        <p className="text-center font-inter text-5xl mt-14">
          Studios and Suites
        </p>
        <div className="mt-10">
          <img className="w-full h-84 object-cover" src="/exterior-section-image.jpg" alt="Bottom Image" />
        </div>
      </div>
      <p className="text-center font-inter text-5xl mt-14">
        Our Units
      </p>

      {/* cards */}
      <div className='flex flex-col lg:flex-row justify-center items-center mt-12 mb-10'>
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-7">
          <img className="h-25" src="l2-card-image.jpg" alt="Studio Apartment" />
          <div className="card-body h-full">
            <h2 className="card-title">Studio Apartments</h2>
            <p>Our studio rooms, adorned with minimalist interiors and stylish accents, epitomizes modern living. In a cluttered world, Lembrança offers a serene sanctuary where less is not just more; its everything.</p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-7">
          <img className="h-25" src="l3-card-image.jpg" alt="1 Bedroom Apartment" />
          <div className="card-body h-full">
            <h2 className="card-title">1 Bedroom Apartment</h2>
            <p>Step into comfort at our 1-bedroom apartment at Lembrança. This space prioritizes your relaxation. With inviting interiors and cozy accents, we provide a comforting sanctuary.</p>
          </div>
        </div>
      </div>  
    </div> 
  )
}

export default LastSection
  // old cards
   {/* <div className="card card-side bg-base-100 shadow-xl mt-5">
          <figure><img src="/one_bed_icon.png" alt="one_bed_icon" className='lg:mr-20 lg:ml-20 w-14 h-14 hidden sm:block'/></figure>
          <div className="card-body">
            <h2 className="lg:card-title font-semibold text-center">One Bedroom Apartment</h2>
            <p className='text-center lg:text-left'>Step into comfort at our 1-bedroom apartment at Lembrança. This space prioritizes your relaxation. With inviting interiors and cozy accents, we provide a comforting sanctuary.</p>
          </div>
        </div>
           */}

                   
        {/* <div className="card card-side bg-base-100 shadow-xl sm:mt-10">
          <figure><img src="studio_icon.png" alt="studio_icon" className='lg:mr-20 lg:ml-20 w-14 h-14 hidden sm:block'/></figure>
          <div className="card-body">
            <h2 className="lg:card-title font-semibold text-center">Studio Apartment</h2>
            <p className='text-center lg:text-left'>Our studio rooms, adorned with minimalist interiors and stylish accents, epitomizes modern living. In a world cluttered with excess, Lembrança offers a serene sanctuary where less is not just more; its everything.</p>
          </div>
        </div>          */}