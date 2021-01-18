import EachProductList from "../components/eachproductlist";
const ProductList = (props) => {
  const productlist = props.products?.map((product, index) => {
    return (
      <EachProductList
        productListingPageType={props.productListingPageType}
        product={product}
        key={"product" + index}
      />
    );
  });

  return (
    <div className="card py-2">
      <div className="px-4 py-3">
        <strong className="product-list-tile">{props.title}</strong>
      </div>
      <div className="">
        <center>{productlist}</center>
      </div>
    </div>
  );
};

export default ProductList;
