import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path= "/" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
          </Routes>
        </div>  
    </>
  );
}

export default App;
