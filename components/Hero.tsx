import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full pb-[56.25%] lg:pb-[45%]">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/drone_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> 
  )
}

export default Hero