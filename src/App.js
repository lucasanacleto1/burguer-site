import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [currentSale, setCurrentSale] = useState([]);

  const [textInput, setTextInput] = useState("");

  function handleClick(id) {
    for (let i = 0; i < currentSale.length; i++) {
      if (id === currentSale[i]) {
        return;
      }
    }
    setCurrentSale([...currentSale, id]);
  }

  const showProducts = (element) => {
    if (textInput === element) {
      setFilteredProducts(
        products.filter(
          (item) =>
            item.name.toLowerCase() === element.toLowerCase() ||
            item.category.toLowerCase() === element.toLowerCase()
        )
      );
    }

    if (element === "") {
      setFilteredProducts(products);
    }
  };

  const removeAllItems = () => {
    setCurrentSale([]);
  };
  const removeCartItem = (cartProduct) => {
    setCurrentSale(currentSale.filter((item) => item !== cartProduct));
  };

  return (
    <div className="App">
      <header className="header-container">
        <div className="logo-name">
          <h2>Burguer</h2>
          <h4 className="logo-name-2">Kenzie</h4>
        </div>
        <div className="search-container">
          <input
            className="search-label"
            type="text"
            placeholder="Pesquisar"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />
          <button
            onClick={() => showProducts(textInput)}
            className="search-button"
          >
            Pesquisar
          </button>
        </div>
      </header>
      <div className="ajust-cart-menu">
        <div className="items">
          <MenuContainer
            productList={filteredProducts}
            handleClick={handleClick}
          />
        </div>
        <Cart
          currentSale={currentSale}
          removeCartItem={removeCartItem}
          removeAllItems={removeAllItems}
        />
      </div>
    </div>
  );
}

export default App;
