import "./style.css";

const Cart = ({ currentSale, removeCartItem, removeAllItems }) => {
  return (
    <div className="ajust-container">
      <div className="cart-container">
        <div className="cart-header">
          <h3>Carrinho de compras</h3>
        </div>
        <div className="cart-content">
          <div className="items">
            {currentSale.length !== 0 ? (
              currentSale.map((item, index) => (
                <div key={index} className="cart-products">
                  <img className="cart-img-product" src={item.img} alt="" />
                  <div>
                    <h3 className="name">{item.name}</h3>
                    <div className="item-category-cart"> {item.category}</div>
                  </div>
                  <button
                    onClick={() => removeCartItem(item)}
                    className="btn-remove-cart-item"
                  >
                    Remover
                  </button>
                </div>
              ))
            ) : (
              <div>
                <h3>Seu carrinho está vazio</h3>
              </div>
            )}
          </div>
          <div className="line">
            <hr />
          </div>
          <div className="total-price">
            <p>Total:</p>
            <span>
              {currentSale
                .reduce((total, current) => current.price + total, 0)
                .toFixed(2)}
            </span>
          </div>
          <button onClick={removeAllItems} className="btn-remove-all" set>
            Remover todos os produtos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
