import React, { useState } from 'react'
import Header from '../components/Header'
import items from '../constants/data.json'

const technology = items.technology;

const Technology = () => {
  const[tech, settech] = useState(technology[0]);
  const techUsed=(event)=>{
    const id = event.target.id;
    settech(technology[id]);
  }
  return (
    <div className='tech-mobile pb-10 px-3 flex flex-col justify-start text-white  min-h-screen h-fit sm:tech-tablet md:tech-desktop overflow-hidden'>
      <Header />
      <h1 className='text-center text-2xl md:pl-10 md:text-left'><span className='text-gray-500'>03</span> SPACE LAUNCH 101</h1>
      <div className='p-5 flex flex-col justify-center items-center md:flex-row-reverse md:gap-20'>
        <img src={tech.images.portrait} alt={tech.name} />
        <div className='md:flex md:w-1/2 md:gap-10'>
        <ul className='flex justify-center py-5 gap-10 text-2xl md:flex-col'>
          {technology.map((data,index)=>(
            <li key={data.name}>
              <div className={`${data.name==tech.name ? 'text-black bg-white border-black':'border-white'} circle w-12 h-12 border-2 `} id={index} onClick={techUsed}>{index+1}</div>
            </li>
          ))}
           </ul>
           <div>
            <h2  className='text-center text-xl md:text-left'>THE TERMINOLOGY...</h2>
            <h3 className='text-center text-3xl uppercase py-5 md:text-left'>{tech.name}</h3>
            <p className='text-center text-lg text-gray-500 md:text-left'>{tech.description}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Technology
