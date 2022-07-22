import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";





const App = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    getProducts();
  },[])
  
  
  const getProducts=()=>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
  }
  

  return (
    <div className="container">
      <Header />
      <div className="items">
        <Products products={products} setProducts={setProducts} />
      </div>
    </div>
  );
};

export default App;
