import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import {Route, Routes} from 'react-router-dom';
import UpdateProd from "./components/UpdateProd";

function App() {
  return (
    <>
      <Navbar/>
        <div className="container d-flex justify-content-center">
          <Routes>
            <Route path= "/" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/update/:prodName" element={<UpdateProd/>} />
          </Routes>
        </div>  
    </>
  );
}

export default App;
