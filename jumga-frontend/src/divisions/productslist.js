import EachProductList from "../components/eachproductlist";
const ProductList = (props) => {
  return (
    <div className="card">
      <div className="px-4 py-3">
        <strong className="product-list-tile">{props.title}</strong>
      </div>
      <div className="p-4">
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
        <EachProductList showAddToWishlistBtn={props.showAddToWishlistBtn} />
      </div>
    </div>
  );
};

export default ProductList;
