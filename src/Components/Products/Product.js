import React from "react";

const Product = ({ products,basket,setBasket,product,money,total}) => {
  
  const basketItem=basket.find(item=>item.id===product.id);

  const addToBasket=()=>{
    const addedProduct=basket.find(item=>item.id===product.id);
    if(addedProduct){
      addedProduct.amount+=1;
      setBasket([...basket.filter(item=>item.id!==product.id),addedProduct])
    }
    else{
      setBasket([...basket,{id:product.id,amount:1}]);
    }
  }

  const removeFromBasket=()=>{
    const addedProduct=basket.find(item=>item.id===product.id);
    if(addedProduct.amount===0){
        setBasket([...basket.filter(item=>item.id!==product.id)])
    }
    else{
        addedProduct.amount-=1;
        setBasket([...basket.filter(item=>item.id!==product.id),addedProduct])
    }
  }
  
  return (
    <>
        <div className="item-wrapper">
          <img src={product.url} className="item-img" />
          <div className="item-name">{product.title}</div>
          <div className="item-cost">$ {product.price}</div>
          <div className="item-controls">
            <button disabled={!basketItem} className="item-sell" onClick={removeFromBasket}>Sell</button>
            <input type={"button"} className="item-input" value={basketItem && basketItem.amount || 0 }/>
            <button disabled={total+product.price>money} className="item-buy" onClick={addToBasket}>Buy</button>
          </div>
        </div>
    </>
  );
};

export default Product;
