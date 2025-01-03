import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <h1 className='heading'>ABOUT ME</h1>
      <Image src="/cartoonpic2.png" alt="img" width={200} height={200} className='img1' />
      <h2>I am Computer Engineer and oracle certified professional in DBA Track and working as Trade 
          Instructor(Computer) in govt techninal education Department.I am student at GIAIC, pursuing a 
          course in Artifical Intelligence,web 3.0,Metaverse.Passonate about technology constantly new 
          skills to stay up-to-date with the latest innovations.
      </h2>
      <div className='btn3'>
        <button className='bt2'><FaLinkedin className='icon'/></button>
        <button className='bt2'><FaGithub className='icon'/></button>
        <button className='bt2'><FaFacebook className='icon'/></button>
        <button className='bt2'><FaYoutube className='icon'/></button>
        

      </div>
      <Skills/>
    </div>
  )
}

export default About
export const Skills = () => {
  return (
    <div>
      
<h1 className='heading'>My Skills</h1>

    <div>
      <h2 className='skill-h2'>HTML</h2>
      <div className='bar'></div>
    </div>

    <div>
      <h2 className='skill-h2'>CSS</h2>
      <div className='bar1'></div>
    </div>

    <div>
      <h2 className='skill-h2'>Typescript</h2>
      <div className='bar2'></div>
    </div>
    <div>
      <h2 className='skill-h2'>Next JS</h2>
      <div className='bar3'></div>
    </div>

    <div>
      <h2 className='skill-h2'>Tailwind CSS</h2>
      <div className='bar4'></div>
    </div>
    </div>
  )
}