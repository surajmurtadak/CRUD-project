import { Link } from "react-router-dom";
import { useContext } from "react";
import { Data } from "../contextAPI/DataContext";
export default function Navbar(){
  let {cart} = useContext(Data);
  return(
    <>
      <nav
        className="navbar navbar-expand-lg text-light sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            S-Mart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex align-content-end">
                <Link className="nav-link" to="/addproduct">
                  Add product
                </Link>
                <Link className="nav-link" to="/cart">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/windows/32/ffffff/shopping-cart.png"
                    alt="shopping-cart"
                  />
                  <span className="count">{cart.length}</span>
                </Link>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}