import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './Homepage/App';
import Info from './Numeric/App'
import Map from './Map/App'
import { Footer } from './Homepage/footer';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/map' element={<Map />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </BrowserRouter>

  )

}

export default App;
