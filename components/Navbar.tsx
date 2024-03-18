"use client";

const Navbar = () => {
  
  return (

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img 
        src="/logo.png"
        width="180"
        height="150"
        className="d-inline-block align-top"
        alt="Lembranca Logo"
        />
      </div>
      
      <div className="flex-row" >
        <p className="mr-10 book-now">Book Now: </p>
        <a href="https://www.airbnb.co.in/rooms/1101499957849328499?source_impression_id=p3_1710148144_B0k7FFwZdQsNh%2BcD">
          <img className="mr-10 logo-airbnb" width = {40} height = {40} src="/airbnb_logo.svg"></img>
        </a>
        <a href="https://www.makemytrip.com/hotels/lembranca_studios_and_suites-details-goa.html">
          <img className = "logo-mmt"width = {100} height = {40} src="/mmt_logo.svg"></img>
        </a>
      </div>
    </div>

  )
}

export default Navbar
