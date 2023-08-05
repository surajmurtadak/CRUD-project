import {createContext, useState, useEffect } from "react";
import axios from 'axios';
export const Data = createContext();
export const DataProvider =({children})=>{
  const [data, setData] = useState([]);
  let [cart,setCart] = useState([]);
  
  let fetchData = () => {
    axios.get("http://localhost:8000/")
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(fetchData, []);
  
  return(
    <Data.Provider value={{cart,setCart,data, fetchData}}>{children}</Data.Provider>
  );
}