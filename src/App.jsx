import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Placeholder from './pages/Placeholder/Placeholder.jsx';

const App=()=>{
  return(
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeholder' element={<Placeholder/>}/>
      </Routes>
    </div>
  );
};

export default App;