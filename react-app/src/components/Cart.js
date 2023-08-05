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
              <h1 className="fs-1"> {cartItem.productName} </h1>
              <h5 className="fs-5">Rs.{cartItem.price} </h5>
              <p className="fs-6"> {cartItem.description} </p>
              <div className="cart-item-action d-flex">
                
                <button type="button" onClick={()=>delProduct(cartItem.productName)} className="btn btn-outline-danger btn-sm">
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
