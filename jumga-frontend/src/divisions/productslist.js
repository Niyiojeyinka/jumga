import EachProductList from "../components/eachproductlist";
const ProductList = (props) => {
  const productlist = props.products?.map((product, index) => {
    return (
      <EachProductList
        showAddToWishlistBtn={props.showAddToWishlistBtn}
        product={product}
        key={"product" + index}
      />
    );
  });

  return (
    <div className="card">
      <div className="px-4 py-3">
        <strong className="product-list-tile">{props.title}</strong>
      </div>
      <div className="p-4">{productlist}</div>
    </div>
  );
};

export default ProductList;
