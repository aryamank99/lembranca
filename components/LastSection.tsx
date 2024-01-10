import React from 'react'

const LastSection = () => {
  return (
    <div>
      <div>
        <p className="text-center font-inter text-5xl mt-14">
          Studios and Suites
        </p>
        <div className="mt-14">
          <img className="w-full h-85 object-cover" src="/bottom_image.jpeg" alt="Bottom Image" />
        </div>
      </div>
      <p className="text-center font-inter text-5xl mt-14">
        Our Units
      </p>

   
      <div className='flex flex-col lg:w-2/5 sm:w-4/5 mx-auto mt-2'>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src="studio_icon.png" alt="studio_icon" className='lg:mr-20 lg:ml-20 w-14 h-14 hidden sm:block'/></figure>
          <div className="card-body">
            <h2 className="lg:card-title font-semibold text-center">Studio Apartment</h2>
            <p className='text-center lg:text-left'>Our studio rooms, adorned with minimalist interiors and stylish accents, epitomizes modern living. In a world cluttered with excess, Lembrança offers a serene sanctuary where less is not just more; its everything.</p>
          </div>
        </div>         

            

        <div className="card card-side bg-base-100 shadow-xl mt-5">
          <figure><img src="/one_bed_icon.png" alt="one_bed_icon" className='lg:mr-20 lg:ml-20 w-14 h-14 hidden sm:block'/></figure>
          <div className="card-body">
            <h2 className="lg:card-title font-semibold text-center">One Bedroom Apartment</h2>
            <p className='text-center lg:text-left'>Step into comfort at our 1-bedroom apartment at Lembrança. This space prioritizes your relaxation. With inviting interiors and cozy accents, we provide a comforting sanctuary.</p>
          </div>
        </div>
      </div>    


      <div className='mt-10'>
        
      </div>
      


      {/* <div className='w-3/4 mt-14 mx-auto'>
      
        <p className="text-center mt-10">
          At Lembrança, we invite you to immerse yourself in the verdant embrace of nature. Amidst the lush green trees and blooming flora, you will find not just a place to stay but a destination where your senses awaken and your soul finds solace.
        </p>

        <p className="text-center mt-10">
          Our studio rooms, adorned with minimalist interiors and stylish accents, redefine the art of modern living. In a world cluttered with excess Lembrança stands apart offering a serene sanctuary where less is not just more; its everything.
        </p>

        <p className="text-center mt-10">
          We believe in minimalist marvels where clean lines and uncluttered spaces greet you. Every element serves a purpose, creating an atmosphere of calm and unpretentious luxury. You will find simplicity allowing your mind to unwind and your senses to breathe freely.
        </p>

        <p className="text-center mt-10">
          Large windows invite the outdoors in, allowing you to connect with the lush greenery surrounding Lembrança. The natural beauty outside seamlessly merges with the minimalist interiors inside. Wake up to the sight of swaying trees and let the gentle rustle of leaves be your lullaby at night.
        </p>

        <p className="text-center mt-10">
          At Lembrança we understand the importance of family time. Even within our cozy studio rooms, we have curated a range of activates that the whole family can enjoy together. From movie nights to board games, your family will find a world of fun within the walls of our studios.
        </p>

        <p className="text-center mt-10">
          At Lembrança, our studio rooms transform into intimate spaces where special events and celebrations become unforgettable moments. Whether it’s a romantic anniversary, a cozy family gathering, or a close knit friends reunion, our studios provide the perfect back drop for intimate celebrations, ensuring that every moment is etched in the sand of time.  
        </p>
      </div> */}
    </div> 
  )
}

export default LastSection