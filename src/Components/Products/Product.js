import React from "react";

const Product = () => {
  return (
    <>
      <div class="item-wrapper">
        <img src="/imgs/bike.jpg" class="item-img" />
        <div class="item-name">Coca-Cola Pack</div>
        <div class="item-cost">$5</div>
        <div class="item-controls">
          <button disabled="disabled" class="item-sell">
            Sell
          </button>
          <input type="number" class="item-input" />
          <button class="item-buy">Buy</button>
        </div>
      </div>
    </>
  );
};

export default Product;
