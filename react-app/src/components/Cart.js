import { useContext } from "react";
import { Data } from "../contextAPI/DataContext";
export default function Cart() {
  let { cart, setCart } = useContext(Data);
  console.log(cart);

    let delProduct=(delProd)=>{
      let newData = cart.filter((prod)=>prod.productName!==delProd);
      setCart(newData);
    }
  return (
    <div className="d-flex flex-column">
      <h3 className="m-3 text-center">Your Cart</h3>
      {console.log(cart)}
      {cart.map((cartItem) => {
        return (
          
          <div className="cart-item" key={cartItem.productName}>
            <div className="left-block">
              <img src={cartItem.imgUrl} alt="iphone" />
            </div>
            <div className="right-block">
              <h1> {cartItem.productName} </h1>
              <h5>Rs.{cartItem.price} </h5>
              <p> {cartItem.description} </p>
              <div className="cart-item-action">
                {/* buttons */}
                <button type="button" className="btn btn-outline-success">
                <img className="action-icons" src="https://img.icons8.com/ios/50/edit--v1.png" alt="edit--v1"/>
                </button>
                {/* <img
                  className="action-icons"
                  src="https://img.icons8.com/ios/50/000000/minus.png"
                  alt="minus"
                /> */}
                <button type="button" onClick={()=>delProduct(cartItem.productName)} className="btn btn-outline-danger">
                  <img
                    className="action-icons"
                    src="https://img.icons8.com/wired/50/filled-trash.png"
                    alt="filled-trash"
                  />
                </button>
              </div>
            </div>
          </div>

        );
      })}
    </div>
  );
}
