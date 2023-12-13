import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className='Home-mobile min-h-screen h-fit sm:Home-tablet md:Home-desktop overflow-hidden'>
      <Header />
      <div className='h-fit gap-12 flex flex-col items-center justify-evenly md:pt-28 md:flex-row'>
        <div>
          <h1 className='text-xl md:text-2xl text-gray-500 text-center'>SO,YOU WANT TO TRAVEL TO</h1>
          <h2 className='text-5xl md:text-9xl text-white text-center'>SPACE</h2>
          <p className='text-base md:text-xl text-gray-500 px-5 text-center'>Let’s face it; if you want to go to space, you might as well<br className='hidden sm:block' />
          genuinely go to outer space and not hover kind of on the <br className='hidden sm:block' />
          edge of it. Well sit back, and relax because we’ll give you a<br className='hidden sm:block' />
           truly out of this world experience!</p>
        </div>
        <Link to='/destination'>
        <div className='circle hover:scale-105 bg-white w-52 h-52 text-xl md:text-xl md:w-44 md:h-44 font-medium'>
          EXPLORE
        </div>
        </Link>
      </div>
    </div>
  )


export default Home
