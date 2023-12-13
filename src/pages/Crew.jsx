import React, { useState } from 'react'
import Header from '../components/Header'
import items from '../constants/data.json'

const crew = items.crew;

const Crew = () => {
  const [crewMember,setcrewMember] = useState(crew[0])


  const member=(event)=>{
    const id = event.target.id
    setcrewMember(crew[id])
  }
  return (
    <div className='crew-mobile pb-10 px-3 flex flex-col justify-start text-white  min-h-screen h-fit sm:crew-tablet md:crew-desktop overflow-hidden'>
      <Header />
      <h1 className='text-center  text-2xl md:pl-10 md:text-left'><span className='text-gray-500'>02</span> MEET YOUR CREW</h1>
      <div className='px-5 flex flex-col justify-center items-center md:flex-row-reverse md:items-start'>
        <img className='max-w-lg md:max-w-md' src={crewMember.images.png} alt={crewMember.name.png} />
        <div className='flex flex-col md:flex-col-reverse md:w-1/2 md:pt-14'>
          <ul className='flex justify-center gap-3 py-10 md:justify-start'>
          {crew.map((data, index) =>(
            <li key={data.name}
            ><div className={`${data.name==crewMember.name ? 'bg-white':'bg-gray-500'} rounded-full w-4 h-4`} id={index} onClick={member}></div></li>
          ))}
          </ul>
          <div className='text-center md:text-left md:pr-20'>
            <h2 className='text-3xl uppercase text-gray-500'>{crewMember.role}</h2>
            <h3 className='text-3xl uppercase py-8'>{crewMember.name}</h3>
            <p className='text-gray-500 '>{crewMember.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
