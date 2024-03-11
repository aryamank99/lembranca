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
      
      <div className="flex-row">
        <p className="mr-10">Book Now: </p>
        <a href="https://www.airbnb.co.in/rooms/1101499957849328499?source_impression_id=p3_1710148144_B0k7FFwZdQsNh%2BcD">
          <img className="mr-10" width = {40} height = {40} src="/airbnb_logo.svg"></img>
        </a>
        <a href="https://www.makemytrip.com/hotels/lembranca_studios_and_suites-details-goa.html">
          <img width = {100} height = {40} src="/mmt_logo.svg"></img>
        </a>
      </div>
      {/* <div className="flex-none mr-24">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="dropdown-menu">
              <summary className="text-med">
                Contact Us
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a href="tel:+91-91673-88611">
                  <div className="flex items-center">
                    <img src="/phone_icon.png" width={12} height={12} alt="Phone" className="mr-2"/>
                    +91-91673-88611
                  </div>  
                </a></li>
                <li><a>
                  <div className="flex items-center">
                    <img src="/mail_icon.png" width={12} height={12} alt="Phone" className="mr-2"/>
                    info@lembrancastays.com
                  </div> 
                </a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
    </div>

  )
}

export default Navbar
