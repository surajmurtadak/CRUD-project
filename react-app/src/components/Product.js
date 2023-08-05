import { useContext } from "react";
import { Data } from "../contextAPI/DataContext";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Product() {

  let contextData = useContext(Data);
  let prodData = contextData.data;

  // add product in Cart 
  let addToCart=(pName)=>{
    let newObj = prodData.filter((prod=>prod.productName===pName));
   contextData.setCart((prevState)=>[...prevState,...newObj]);
  }

  // delete product from DB
  let delFromDb=(pName)=>{
    axios.delete(`http://localhost:8000/product/${pName}`)
      .then(response => {
        alert("delete Successfully");
        contextData.fetchData();
      })
      .catch(error => {
        console.error('Error deleting resource:', error);
      });
    
  }
  return (
    <div className="d-flex flex-column">
      <h3 className="m-3 text-center">All Products List</h3>
      {prodData.map((product) => {
        return (
          <div className="cart-item" key={product.productName}>
            <div className="left-block">
              <img src={product.imgUrl} alt="product img" />
            </div>
            <div className="right-block">
              <h1 className="fs-1"> {product.productName.length>25 ? product.productName.substring(0,25)+"..." : product.productName} </h1>
              <h5 className="fs-5">Rs.{product.price} </h5>
              <p className="fs-6"> {product.description.length>30 ? product.description.substring(0,30)+"..." : product.description } </p>
              <div className="cart-item-action">
                {/* buttons */}

                <button type="button" onClick={()=>addToCart(product.productName)} className="btn btn-outline-success btn-sm">Add to Cart</button>
                <Link to={`/update/${product.productName}`} style={{textDecoration:'none'}} > <button type="button" className="btn btn-outline-primary btn-sm"> <img className="action-icons" src="https://img.icons8.com/ios/50/edit--v1.png" alt="edit--v1"/> </button></Link>
                <button type="button" onClick={()=>delFromDb(product.productName)} className="btn btn-outline-danger btn-sm"><img className="action-icons" src="https://img.icons8.com/wired/50/filled-trash.png" alt="filled-trash"/> </button>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
