import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Data } from "../contextAPI/DataContext";

export default function AddProduct() {

  let contextData = useContext(Data);
  const [product, setProduct] = useState({
    productName:"",description:"",imgUrl:"",price:0
  });

  let name,value;

  const prodFunc = (event)=> {
    name = event.target.name;
    value = event.target.value;
    setProduct({...product,[name]:value});    
  }

  const onSubmits = async(event)=>{
    event.preventDefault();
    // const {productName,description,price} = product;
    console.log(product);
    // const data = {"productName":productName,"description":description,"price":price};
      
        axios.post("http://localhost:8000/post",product)
        .then(response=>{
          contextData.fetchData();
           alert("Uploaded Successfully");
        });

     }

  return (
    <div className="d-flex flex-column">
      <h3 className="m-3 text-center">Add Product in product list</h3>
      <div className="new-form">
        <form onSubmit={onSubmits} >
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Name of Product
            </label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={prodFunc}
              className="form-control"
              id="productName"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label">
              Product image URL
            </label>
            <input
              type="url"
              name="imgUrl"
              value={product.imgUrl}
              onChange={prodFunc}
              className="form-control"
              id="imgUrl"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={prodFunc}
              className="form-control"
              id="description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={prodFunc}
              className="form-control"
              id="price"
            />
          </div>

          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
