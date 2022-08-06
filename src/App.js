import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import products from "./api/db.json";

const App = () => {
  const [money,setMoney]=useState(234000000000); 
  const [basket,setBasket]=useState([]);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(basket.reduce((acc,item)=>{
      return acc+(item.amount*(products.find(product=>product.id===item.id).price))
    },0))
  },[basket])
  return (
    <div className="container">
      <Header money={money}  setMoney={setMoney} total={total} setBasket={setBasket}/>
      <div className="items">
        <Products total={total} money={money} basket={basket} setBasket={setBasket}  products={products} />
      </div>
    </div>
  );
};
export default App;
