import tv from "../assets/images/tv.jpg";
const EachProductList = (props) => {
  const wishlist = props.showAddToWishlistBtn ? (
    <button className="btn color-yellow m-2">
      <i className="fa fa-heart text-white"></i>
    </button>
  ) : (
    <></>
  );
  return (
    <div className="each-product-list m-2">
      <div style={{ display: "inline" }}>
        <img
          src={
            props.product.images[0] !== undefined
              ? props.product["images"][0].slug
              : "default"
          }
          width="30%"
          alt={`${props.product.name} image`}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <div className="py-2">
          <small>{props.product.name}</small>
          <br></br>
          <br></br>
          <strong className="product-list-tile-price">
            ${props.product.price}
          </strong>
        </div>
      </div>

      <div
        style={{ display: "none" }}
        className="container-fluid each-product-overlay p-3"
      >
        <button className="btn color-yellow m-3">
          <i className="fa fa-shopping-cart text-white"></i>
        </button>
        {wishlist}
      </div>
    </div>
  );
};
export default EachProductList;
