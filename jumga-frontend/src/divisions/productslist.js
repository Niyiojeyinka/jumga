import EachProductList from "../components/eachproductlist";
const ProductList = () => {
  return (
    <div className="card">
      <div className="px-4 py-3">
        <strong className="product-list-tile">Recent Products</strong>
      </div>
      <div className="p-4">
        <EachProductList />
        <EachProductList />
        <EachProductList />
        <EachProductList />
        <EachProductList />
        <EachProductList />
        <EachProductList />
        <EachProductList />
        <EachProductList />
      </div>
    </div>
  );
};

export default ProductList;
