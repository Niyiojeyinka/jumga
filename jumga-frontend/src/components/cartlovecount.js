import { useSelector } from "react-redux";

const CartLoveCount = () => {
  const cart = useSelector((store) => store.cart);
  const wishlist = useSelector((store) => store.wishlist);

  let totalAmount = 0.0;
  for (let i = 0; i < cart.products.length; i++) {
    totalAmount = totalAmount + parseFloat(cart.products[i].price);
  }

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
      <strong className="">${totalAmount}</strong>
    </span>
  );
};
export default CartLoveCount;
