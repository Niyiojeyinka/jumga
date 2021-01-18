import EachProduct from "../components/eachproduct";
const ProductListing = (props) => {
  const productlist = props.products?.map((product, index) => {
    return (
      <EachProduct
        productListingPageType={props.productListingPageType}
        product={product}
        key={"product" + index}
      />
    );
  });

  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
        <span className="font-weight-bold text-uppercase">{props.title}</span>
        <div>
          <i className="fa fa-sort" />
        </div>
      </div>
      <div className="row g-3 p-3">{productlist}</div>
    </div>
  );
};

export default ProductListing;
