import React from "react";
import Product from "./Product";

function Products({ basket, setBasket, products, money, total }) {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          products={products}
          product={product}
          money={money}
          total={total}
        />
      ))}
    </>
  );
}

export default Products;
