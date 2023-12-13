import Home from './pages/Home'
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

const App = () => (
  <Router>
  <>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/destination' element={<Destination />}/>
    <Route path='/crew' element={<Crew />}/>
    <Route path='/technology' element={<Technology />}/>
  </Routes>
  </>
  </Router>
);

export default App



       
