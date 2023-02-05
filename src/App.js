


import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import Product1 from './components/product1';
import Fulldelx from './components/Fulldelx';
// import DashBoard from './components/dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<Fulldelx/>} />
          {/* <Route path='/cart' element={<Product1/>} /> */}

          
          {/* <Route path='/Laptops' element={<Laptops />} /> */}

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
