import logo from '../assets/shared/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const[toggle,settoggle]=useState(false);
  const location = window.location.pathname;
  return(
    <div className='w-full flex items-center justify-between p-12'>
      <div className='circle bg-white'>
      <img className='min-w-max' src={logo} alt="" />
      </div>
      <div className='hidden line sm:block'></div>
      <ul className=' hidden w-full h-16 items-center justify-between text-xl font-medium text-white gap-5 backdrop-blur-sm sm:flex'>
      <li className={`${location=='/' ? 'underline':''} ml-12`}><Link to='/'>00 HOME</Link></li>
      <li className={`${location=='/destination' ? 'underline':''}`}><Link to='/destination'>01 DESTINATION</Link></li>
      <li className={`${location=='/crew' ? 'underline':''}`}><Link to='/crew'>02 CREW</Link></li>
      <li className={`${location=='/technology' ? 'underline':''}`}><Link to='/technology'>03 TECHNOLOGY</Link></li>
      </ul>
      <div className='sm:hidden'>
      <img src={toggle ? close:menu} alt="" className='object-fill' onClick={()=>settoggle((prev)=>!prev)}/>
      <ul className={`${toggle ? 'flex':'hidden'} flex-col gap-20 backdrop-blur-3xl mt-10 p-10 h-fit absolute right-0 pt-10 min-w-max text-4xl font-medium text-white`}>
      <li className={`${location=='/' ? 'underline':''}`}><Link to='/'>00 HOME</Link></li>
      <li className={`${location=='/destination' ? 'underline':''}`}><Link to='/destination'>01 DESTINATION</Link></li>
      <li className={`${location=='/crew' ? 'underline':''}`}><Link to='/crew'>02 CREW</Link></li>
      <li className={`${location=='/technology' ? 'underline':''}`}><Link to='/technology'>03 TECHNOLOGY</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Header
