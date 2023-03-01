import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import LandingPage from './component/LandingPage';


function App() {
  return<BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
