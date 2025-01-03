
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='navbar'>
<div className='logo'>
  <h2 className='logo'>Rashida Shaikh</h2>
</div>
<div className='navigate'>
  <ul>
    <li><Link href="/" className='link'> Home</Link></li>
    <li><Link href="./About" className='link'> About</Link></li>
    <li><Link href="./projects"className='link'> Projects</Link></li>
    <li><Link href="./contact" className='link'> Contact</Link></li>
    
  </ul>
</div>
<div className='btn'>
  {/* <button  className='bt'>Download CV</button> */}
  <button className='bt'><Link href="/Rashidacv (3).pdf" className='bt-li'>Download CV</Link></button>

</div>
    </header>
    
  )
}

export default Navbar
