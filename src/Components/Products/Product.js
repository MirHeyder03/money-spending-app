import React from "react";

const Product = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className="item-wrapper" key={product.id}>
          <img src={product.url} className="item-img" />
          <div className="item-name">{product.title}</div>
          <div className="item-cost">{product.price}</div>
          <div className="item-controls">
            <button disabled="disabled" className="item-sell">
              Sell
            </button>
            <input type="number" className="item-input" />
            <button className="item-buy">Buy</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
