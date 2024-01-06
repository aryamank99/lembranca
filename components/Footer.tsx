import React from 'react'
import Link from "@/node_modules/next/link"
import { NAV_LINKS } from "@/constants/index"

const Footer = () => {
  return (
    <div className='pt-20'>
      <div className="bg-[url('/footer_background.png')] bg-cover bg-center h-50">
        <nav className="flex justify-center pt-5">
          <ul className="h-full gap-12 lg:flex justify-center items-center">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label.toUpperCase()}
              </Link>
            ))}
          </ul>
        </nav> 
        <div className="flex justify-center items-center pt-7">
          <p className='text-white'>
          We invite you to let us be your Lembrança-your souvenir of tranquility, warmth and unforgettable experiences.
          </p>
        </div>      

        <div className="flex justify-center items-center pt-7 pb-5">
          <img className="w-25 h-10" src="/footer_logo.png" alt="Footer Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer