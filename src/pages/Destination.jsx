import React, { useState } from 'react'
import Header from '../components/Header'
import items from '../constants/data.json'

const destination = items.destinations;

const Destination = () => {
  const [planet, setplanet] = useState(destination[0]);
  const selectPlanet=(event)=>{
    const id = event.target.id;
    setplanet(destination[id]);
  }
  return (
    <div className='des-mobile  min-h-screen h-fit sm:des-tablet md:des-desktop overflow-hidden '>
      <Header />
      <div className='flex flex-col px-2 text-white items-center justify-center md:flex-row md:items-start sm:px-5 '>
      <div className='w-1/2 flex flex-col justify-center '>
      <h1 className='text-2xl text-center'><span className='text-gray-500'>01</span> PICK YOUR DESTINATION</h1>
      <img className='py-12 animation-scale md:px-40' src= {planet.images.png} alt={destination[1].name} />
      </div>
      <div className='w-1/2 md:top-0'>
        <ul className='flex justify-center text-lg gap-10 sm:text-2xl sm:gap-16'>
      {destination.map((data, index) =>(
            <li className={`${data.name==planet.name ? 'underline':''}`}  key={index} id={index} onClick={selectPlanet}>
              {data.name}
            </li>
     ))}
     </ul>
     <h2 className='text-center py-5 text-7xl sm:text-9xl uppercase '>{planet.name}</h2>
     <p className='text-center sm:px-10 sm:text-lg'>{planet.description}</p>
     <div className='text-center items-center justify-evenly pt-5 flex flex-col pb-12 gap-5 sm:flex-row'>
      <div>
        <h3 className='text-gray-500'>AVG.DISTANCE</h3>
        <span className='text-3xl uppercase'>{planet.distance}</span>
      </div>
      <div>
        <h3 className='text-gray-500'>EST.TRAVEL TIME</h3>
        <span className='text-3xl uppercase'>{planet.travel}</span>
      </div>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Destination
