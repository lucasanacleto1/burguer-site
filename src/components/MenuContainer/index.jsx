import Product from "../Product";
import "./style.css";

const MenuContainer = ({ productList, handleClick }) => {
  return (
    <div className="show-items">
      {productList.map((product, index) => (
        <Product
          key={index}
          productList={product}
          handleClick={() => handleClick(product)}
        />
      ))}
    </div>
  );
};

export default MenuContainer;
