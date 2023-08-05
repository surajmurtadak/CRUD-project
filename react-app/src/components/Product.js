import { useContext } from "react";
import { Data } from "../contextAPI/DataContext";
import axios from "axios";
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
      {prodData.map((product) => {
        return (
          <div className="cart-item" key={product.productName}>
            <div className="left-block">
              <img src={product.imgUrl} alt="iphone" />
            </div>
            <div className="right-block">
              <h1> {product.productName} </h1>
              <h5>Rs.{product.price} </h5>
              <p> {product.description} </p>
              <div className="cart-item-action">
                {/* buttons */}
                <button type="button" onClick={()=>addToCart(product.productName)} className="btn btn-outline-success">Add to Cart</button>
                {/* <img
                  className="action-icons"
                  src="https://img.icons8.com/ios/50/000000/minus.png"
                  alt="minus"
                /> */}
                <button type="button" onClick={()=>delFromDb(product.productName)} className="btn btn-outline-danger"><img className="action-icons" src="https://img.icons8.com/wired/50/filled-trash.png" alt="filled-trash"/>
</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
