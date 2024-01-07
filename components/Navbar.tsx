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
      <div className="flex-none mr-24">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="dropdown-menu">
              <summary>
                Contact Us
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a href="tel:123-456-789">
                  <div className="flex items-center">
                    <img src="/phone_icon.png" width={12} height={12} alt="Phone" className="mr-2"/>
                    123-456-789
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
      </div>
    </div>

    // <Navbar className="bg-body-tertiary">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <img
    //           src="/logo.png"
    //           width="180"
    //           height="150"
    //           className="d-inline-block align-top"
    //           alt="Lembranca Logo"
    //         />
    //       </Navbar.Brand>
    //       <NavDropdown title="Contact Us" id="contact-nav-dropdown" className="mr-20">
    //           <NavDropdown.Item href="tel:123-456-789">
    //           <div className="d-flex align-items-center">
    //             <img src="/phone_icon.png" width={12} height={12} alt="Phone" className="mr-2"/>
    //             123-456-789
    //           </div>
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="mailto:info@lembrancastays.com">
    //           <div className="d-flex align-items-center">
    //             <img src="/mail_icon.png" width={12} height={12} alt="Phone" className="mr-2"/>
    //             info@lembrancastays.com
    //           </div>
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //     </Container>
    //   </Navbar>


  )
}

export default Navbar

//Old navbar code:

    // <nav className="flex p-0 py-3 relative z-30 w-screen">
    //   <div className="flex justify-start w-screen">
    //     <a>  
    //       <Image 
    //         src="/logo.png" 
    //         alt="logo" 
    //         width={250} 
    //         height={250} 
    //         objectFit="contain"
    //         className="pl-10" 
    //       />
    //     </a>
    //   </div>
    //   <div className="flex items-center ml-2">
    //     <div
    //       onMouseEnter={() => setIsHovered(true)}
    //       onMouseLeave={() => setIsHovered(false)}
    //       className="relative arrow "
    //     >
    //       <button className="flex flex-row items-center whitespace-nowrap mr-8 space-x-1 button">
    //         Contact us 
    //         <img src="/arrow.png" width={12} height={12} alt="Arrow" className="rotate ml-1"/>
    //       </button>

    //       {isHovered && (
    //         <div className="origin-top-right absolute right-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    //           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    //             <p 
    //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
    //               role="menuitem"
    //             >
    //               <a href="tel:123-456-789">
    //                 123-456-789
    //               </a>
    //             </p>

    //             <p 
    //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
    //               role="menuitem"
    //             >
    //               <a href="mailto:info@lembrancastays.com">
    //                 info@lembrancastays.com
    //               </a>
    //             </p>

    //           </div>
    //         </div>
    //       )}
    //     </div>
        
    //   </div>
    // </nav>
