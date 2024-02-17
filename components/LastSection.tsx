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
          <img className="h-25" src="l1-card-image.jpg" alt="Classic Studio Apartment" />
          <div className="card-body h-full">
            <h2 className="card-title">Classic Studio</h2>
            <div className='flex flex-row mt-1 '>
              <img className="h-6 w-6 mx-2" src='units_card_bed.svg'/>
              <p className='mx-3'>Studio</p>
              <img className="h-6 w-6 mx-2" src='units_card_bath.svg'/>
              <p className='mx-3'>1</p>
              <img className="h-6 w-6 mx-2" src='units_card_size.svg'/>
              <p className='mx-3'>35 m<sup>2</sup></p>
            </div>
            <p className='mt-2'>Our Classic Studio is a snug sanctuary tailored for close comfort. This inviting space boasts a queen-size bed, a generous bathroom with a walk-in shower and lavatory, and floods of natural light.</p>
            
            
          </div>
      </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-7">
          <img className="h-25" src="l2-card-image.jpg" alt="Premier Studio Apartment" />
          <div className="card-body h-full">
            <h2 className="card-title">Premier Studio</h2>
            <div className='flex flex-row items-center mt-1'>
              <img className="h-6 w-6 mx-2" src='units_card_bed.svg'/>
              <p className='mx-3'>Studio</p>
              <img className="h-6 w-6 mx-2" src='units_card_bath.svg'/>
              <p className='mx-3'>1</p>
              <img className="h-6 w-6 mx-2" src='units_card_size.svg'/>
              <p className='mx-3'>43 m<sup>2</sup></p>
            </div>
            <p className='mt-2'>The Premier Studio offers travellers a cozy and intimate retreat and has been beautifully furnished with a queen size bed, a spacious bathroom with a walk-in shower and lavatory, sofa bed and a balcony.</p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-7">
          <img className="h-25" src="l3-card-image.jpg" alt="1 Bedroom Apartment" />
          <div className="card-body h-full">
            <h2 className="card-title">One Bedroom Suite</h2>
            <div className='flex flex-row mt-1'>
              <img className="h-6 w-6 mx-2" src='units_card_bed.svg'/>
              <p className='mx-3'>1</p>
              <img className="h-6 w-6 mx-2" src='units_card_bath.svg'/>
              <p className='mx-3'>1</p>
              <img className="h-6 w-6 mx-2" src='units_card_size.svg'/>
              <p className='mx-3'>57 m<sup>2</sup></p>
            </div>
            <p className='mt-2'>The One Bedroom Suite is  ideal for travellers looking to spread out and relax in a refined atmosphere. It consists of a spacious bedroom with a queen size bed, balcony, a separate living area with sofa bed. </p>
          </div>
        </div>
      </div>  
    </div> 
  )
}

export default LastSection

// card text
// Step into comfort at our 1-bedroom apartment at Lembrança. This space prioritizes your relaxation. With inviting interiors and cozy accents, we provide a comforting sanctuary.
// Our studio rooms, adorned with minimalist interiors and stylish accents, epitomizes modern living. In a cluttered world, Lembrança offers a serene sanctuary where less is not just more; its everything.</p>

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