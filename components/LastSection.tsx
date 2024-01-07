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
      <div className="carousel w-full mt-20">
        <div id="item1" className="carousel-item w-1/2 flex justify-center">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="studio_icon.png" alt="studio_icon"/></figure>
            <div className="card-body">
              <h2 className="card-title">Studio Apartment</h2>
              <p>Our studio rooms, adorned with minimalist interiors and stylish accents, redefine the art of modern living. In a world cluttered with excess Lembrança stands apart offering a serene sanctuary where less is not just more; its everything.</p>
            </div>
          </div>
        </div> 
        <div id="item2" className="carousel-item w-1/2 flex justify-center">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="/one_bed_icon.png" alt="one_bed_icon"/></figure>
            <div className="card-body">
              <h2 className="card-title">One Bedroom Apartment</h2>
              <p>
Step into comfort at our 1-bedroom apartment at Lembrança. Designed for modern living, this space prioritizes your relaxation. With inviting interiors and cozy accents, we provide a comforting sanctuary. Experience an abode where comfort is paramount.</p>
            </div>
          </div>
        </div> 
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