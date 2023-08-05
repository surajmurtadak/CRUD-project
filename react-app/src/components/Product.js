import { useContext } from "react";
import { Data } from "../contextAPI/DataContext";
export default function Product() {

  let contextData = useContext(Data);
  let prodData = contextData.data;

  let addToCart=(pName)=>{
    let newObj = prodData.filter((prod=>prod.productName===pName));
   contextData.setCart((prevState)=>[...prevState,...newObj]);
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
                <button type="button" className="btn btn-outline-danger"><img className="action-icons" src="https://img.icons8.com/wired/50/filled-trash.png" alt="filled-trash"/>
</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
