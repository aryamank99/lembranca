import React from 'react'

const Hero = () => {
  return (
    <div className="hero relative w-full h-0 sm:pb-[70%] lg:pb-[37%]">
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/drone_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> 
  )
}

export default Hero