import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="items">
        <Products />
      </div>
    </div>
  );
};

export default App;
