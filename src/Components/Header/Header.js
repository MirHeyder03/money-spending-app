import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <img src="/imgs/elon.jpg" alt="Elon Musk" />
        <p>Spend Elon Musk's money</p>
      </div>
      <div>
        <div className="money">
          <p>$234,000,000,000</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
