import tv from "../assets/images/tv.jpg";
const EachProductList = (props) => {
  const wishlist = props.showAddToWishlistBtn ? (
    <button className="btn color-yellow mx-5">
      <i className="fa fa-heart text-white"></i>
    </button>
  ) : (
    <></>
  );
  return (
    <div className="each-product-list  m-3">
      <div style={{ display: "inline" }}>
        <img src={tv} width="30%" alt="product name" />
      </div>
      <div style={{ display: "inline-block" }}>
        <div className="py-2">
          <small>lg tv 32lf510a- 32 Inch Television</small>
          <br></br>
          <br></br>
          <strong className="product-list-tile-price">$50,000</strong>
        </div>
      </div>

      <div
        style={{ display: "none" }}
        className="container-fluid each-product-overlay p-3"
      >
        <button className="btn color-yellow mx-5">
          <i className="fa fa-shopping-cart text-white"></i>
        </button>
        {wishlist}
      </div>
    </div>
  );
};
export default EachProductList;
