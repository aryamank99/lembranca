"use client";
import Image from "@/node_modules/next/image"
import React, { useState } from "react"

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="flex p-0 py-3 relative z-30 w-screen">

      <div className="flex justify-start w-screen">
        <a>  
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={250} 
            height={250} 
            objectFit="contain"
            className="pl-10" 
          />
        </a>
      </div>
      
      <div className="flex items-center ml-2">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative arrow "
        >
          <button className="flex flex-row items-center whitespace-nowrap mr-8 space-x-1 button">
            Contact us 
            <img src="/arrow.png" width={12} height={12} alt="Arrow" className="rotate ml-1"/>
          </button>

          {isHovered && (
            <div className="origin-top-right absolute right-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <p 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                  role="menuitem"
                >
                  <a href="tel:123-456-789">
                    123-456-789
                  </a>
                </p>

                <p 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                  role="menuitem"
                >
                  <a href="mailto:info@lembrancastays.com">
                    info@lembrancastays.com
                  </a>
                </p>

              </div>
            </div>
          )}
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar


