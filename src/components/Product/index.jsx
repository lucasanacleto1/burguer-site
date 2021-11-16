import "./style.css";

const Product = ({ productList, handleClick }) => {
  return (
    <div className="show-product-list">
      <div className="img-item">
        <img src={productList.img} alt={productList.name} />
      </div>
      <h3 className="product-name">{productList.name}</h3>
      <p>{productList.category}</p>
      <span className="price-text">R$ {productList.price.toFixed(2)}</span>
      <button onClick={handleClick} className="btn-add-item">
        Adicionar
      </button>
    </div>
  );
};

export default Product;
