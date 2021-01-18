import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartLoveCount = () => {
  const cart = useSelector((store) => store.cart);
  const wishlist = useSelector((store) => store.wishlist);

  let totalAmount = 0.0;
  let cartno = 0;
  for (let i = 0; i < cart.products.length; i++) {
    totalAmount =
      totalAmount +
      parseFloat(cart.products[i].price) * parseInt(cart.products[i].count);
    cartno += parseInt(cart.products[i].count);
  }

  return (
    <span className="cartlovecount">
      <span className="social-line">
        <Link to="/customer/wishlist">
          <span className="badge-container">
            <span className="badge badge-warning text-white pbadge">
              {wishlist.products.length}
            </span>
            <i className="fa fa-heart badge-icon"></i>
          </span>
        </Link>
        <Link to="/customer/cart">
          <span className="badge-container">
            <span className="badge badge-warning text-white pbadge">
              {cartno}
            </span>
            <i className="fa fa-shopping-cart badge-icon"></i>
          </span>
        </Link>
      </span>
      <i>Total :</i>
      <strong className="">${totalAmount}</strong>
    </span>
  );
};
export default CartLoveCount;
