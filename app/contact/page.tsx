import React from 'react'
const handleButtonClick = () => {
    window.location.href = 'tel:123-456-789';
  };

function page() {
    return (
        <div style={{ backgroundColor: '#FEFEFA' }}>
            
            <div>
                <p className='text-center text-4xl mt-14'>
                    We Would Love to Hear From You!
                </p>
            </div>

            <div className="flex flex-row items-center justify-center mt-8">
                <img src="/location_pin.svg" alt="location pin" className="w-6 h-6"/>
                <p className='ml-2 text-1xl'>Lembranca Studios & Suites / Magnum Greens, Pundalik Nagar, Alto Porvorim, Penha de França, Goa 403521, India</p>
            </div> 

            <div className="flex justify-center space-x-20 mt-14">
            
                {/* Bookings Box */}

                <div className="w-2/5 p-4 rounded-md" style={{ backgroundColor: '#D3D3E3' }}>
                    <p className='text-center text-3xl'>Bookings</p>
                    
                    {/* Phone Section */}
                    <div className='flex justify-center'>
                        <img className="w-7 h-9 m-8" src="/phone_icon.png" alt="Phone" />
                    </div>

                    <div className='flex justify-center'>
                        <a href="tel:123-456-789" className='callButton'>
                            123-456-789
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className='flex justify-center'>
                        <img className="w-9 h-9 m-14" src="/mail_icon.png" alt="Phone" />
                    </div>

                    <div className='flex justify-center' style={{ marginTop: '-1.25rem' }}> 
                        <a href="mailto:bookings@lembrancastays.com" className='callButton'>
                            bookings@lembrancastays.com
                        </a>
                    </div>

                </div>

                {/* General Enquiries Box */}

                <div className="w-2/5 p-4 rounded-md" style={{ backgroundColor: '#D3D3E3' }}>
                    <p className='text-center text-3xl'>General Enquiries</p>
                    <div className='flex justify-center'>
                        <img className="w-7 h-9 m-8" src="/phone_icon.png" alt="Phone" />
                    </div>
                    <div className='flex justify-center'>
                        <a href="tel:123-456-789" className='callButton'>
                            123-456-789
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className='flex justify-center'>
                        <img className="w-9 h-9 m-14" src="/mail_icon.png" alt="Phone" />
                    </div>

                    <div className='flex justify-center' style={{ marginTop: '-1.25rem' }}> 
                        <a href="mailto:info@lembrancastays.com" className='callButton'>
                            info@lembrancastays.com
                        </a>
                    </div>
                </div>
            </div>
            
          
            
        </div>
    )
}

export default page