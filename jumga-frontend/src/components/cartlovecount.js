import { useSelector } from "react-redux";

const CartLoveCount = () => {
  const cart = useSelector((store) => store.cart);
  const wishlist = useSelector((store) => store.wishlist);

  return (
    <span className="">
      <span className="social-line">
        <span className="badge-container">
          <span className="badge badge-warning text-white pbadge">
            {wishlist.products.length}
          </span>
          <i className="fa fa-heart badge-icon"></i>
        </span>
        <span className="badge-container">
          <span className="badge badge-warning text-white pbadge">
            {cart.products.length}
          </span>
          <i className="fa fa-shopping-cart badge-icon"></i>
        </span>
      </span>
      <i>Total :</i>
      <strong className="">$16,000</strong>
    </span>
  );
};
export default CartLoveCount;
