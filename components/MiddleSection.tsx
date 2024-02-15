import React from 'react'

const MiddleSection = () => {
  return (
    <div>
      <div className='mx-auto w-3/4'>
        <p className='text-center quote mt-10 text-2xl'>
          Lembrança, a hometel with the comfort of a hotel and warmth of a home.
        </p>
      </div>

      <div className="mx-auto w-3/4 mt-10">
      
        <p className="mt-4 text-center">
          Welcome to Lembrança- where every stay is a chapter in the book of memories and every guest is a cherished friend. Nestled amidst serene greenery and landscapes and offering un paralleled hospitality, we invite you to let us be your Lembrança-your souvenir of tranquility, warmth and unforgettable experiences.
        </p>
    
        {/* first row of images */}
        <div className="items-center flex flex-col sm:flex-row justify-between px-6 mt-14">
          <img className="w-60 h-80 mb-8 sm:mb-0" src="/row_1_1_new.jpg" alt="Image 1" />
          <img className="w-60 h-80 mb-8 sm:mb-0" src="/row_1_2_new.jpg" alt="Image 2" />
          <img className="w-60 h-80 object-cover" src="/row_1_3_new.jpg" alt="Image 3" />
        </div>

        <p className="text-center font-inter text-5xl mt-14">
          Imagine. Experience. Reminisce.
        </p>

        {/* second row of images */}
        <div className="items-center flex flex-col sm:flex-row justify-between px-6 mt-14">
          <img className="w-60 h-80 mb-8 sm:mb-0" src="/row_2_first.jpg" alt="Image 1" />
          <img className="w-60 h-80 mb-8 sm:mb-0" src="/row_2_second.jpg" alt="Image 2" />
          <img className="w-60 h-80" src="/row_2_third.jpg" alt="Image 3" />
        </div>

      </div>

      <div className="mx-auto w-3/4 mt-14">
        <p className="text-center">
          In the tranquil ambience of your relaxing holiday, everyday becomes a cherished memory. The gentle rustle of leaves and the warmth of the sun create an atmosphere where every moment feels like a precious Lembrança, a keepstake of serenity and joy.
        </p>

        <p className="text-center mt-10">
          Amidst the backdrop of your holiday, the Lembranças you collect aren’t just objects; they are fragments of the peace you find. Each trinket, each sea shell, carries the essence of your rejuvenating escape, reminding you of the calm and contentment that defined your days away.
        </p>

        <p className="text-center mt-10">
          As you leave the sanctuary of your holiday, you take back your Lembranças which encapsulate the leisure strolls, laughter with loved ones and moments of blissful solitude. They serve as reminders, tangible echoes of the tranquility you experienced, urging you to return for more.        
        </p>

      </div>

      <div className="mx-auto w-3/4 mt-14">
        
        <p className="text-center font-inter text-5xl mt-14">
          Why choose ordinary when you can have extraordinary?
        </p>
        
        <p className="text-center mt-10">
          Nestled amidst the embrace of nature and wrapped in the warmth of hospitality, our hometel is more than just a place to stay-it’s an invitation to indulge in the extraordinary. Our homestay is carefully crafted to transcend the ordinary, offering a world where moments turn into memories and experiences redefine what you know.   
        </p>

      </div>

    </div>
  )
}

export default MiddleSection