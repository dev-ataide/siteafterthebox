import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
// import { Aboutus } from './pages/aboutus';
import Portfolio from './pages/portfolio';
const App = () => {
  return (
 <BrowserRouter>
    <Routes>
        <Route path='/siteafterthebox' element={<Home/>} />
        {/* <Route path='/aboutus' element={<Aboutus/>} /> */}
        <Route path='/siteafterthebox/portfolio' element={<Portfolio/>} />
    </Routes>
 </BrowserRouter>
  );
};

export default App;
