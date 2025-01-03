import React from 'react'
import Image from "next/image"

const projects = () => {
  return (
    <div>
        <h1 className='heading'>My Projects</h1>
        <div className='projects'>
            <h2 className='pro-h2'> There are some Projects</h2>
        </div>
        <div className='main'>
          <div className='timer'>
          
          <Image src="/count.jpg" alt="img" width={250} height={400} className='img2' />
          </div>
          <div className='card1'>
          
          <Image src="/card1.jpg" alt="img" width={250} height={400} className='img2' />
          </div>
          <div className='resume'>
          
          <Image src="/resume1.jpg" alt="img" width={250} height={400} className='img2' />
          </div>
          <div className='Solsr'>
          
          <Image src="/solar.jpg" alt="img" width={250} height={400} className='img2' />
          </div>
    </div>
    

    </div>
  )
}

export default projects