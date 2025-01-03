import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




export const hero = () => {
  return (
    <div className='hero'>
        <div className='img-div'>
          
          <img src="/cartoonpic2.png" alt="img" width={200} height={200}className='imag'/> 
          </div>
          <div className='info-div'>
            <h1 className='name'>Hello <br />I am <br />Rashida Shaikh</h1>
            <div className='btn2'>
              <button className='bt1'> <Link href="/About" className='bt-li' >About Me</Link></button>
              <button className='bt1'><Link href="/contact" className='bt-li'>contact me</Link></button>
            </div>
          </div>
    </div>
  )
}

export default hero
