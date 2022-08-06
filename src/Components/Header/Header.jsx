import React from "react";
const Header = ({ money, total, setMoney, setBasket }) => {
  const reset = () => {
    setMoney(234000000000);
    setBasket([]);
  };
  return (
    <div className="header">
      <div className="title">
        <img src="/imgs/elon.jpg" alt="Elon Musk" />
        <p>Spend Elon Musk's money</p>
      </div>
      <div>
        <div className="money">
          <p>$ {(money - total).toLocaleString()}</p>
          <button onClick={reset} className="reset">
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
