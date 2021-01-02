const CartLoveCount = () => {
  return (
    <span className="">
      <span className="social-line">
        <span className="badge-container">
          <span className="badge badge-warning text-white pbadge">45</span>
          <i className="fa fa-heart badge-icon"></i>
        </span>
        <span className="badge-container">
          <span className="badge badge-warning text-white pbadge">45</span>
          <i className="fa fa-shopping-cart badge-icon"></i>
        </span>
      </span>
      <i>Total :</i>
      <strong className="">$16,000</strong>
    </span>
  );
};
export default CartLoveCount;
