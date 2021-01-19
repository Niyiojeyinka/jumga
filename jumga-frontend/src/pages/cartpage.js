import ContentTemplate from "./contenttemplate";
import { useSelector } from "react-redux";
import ProductListing from "../divisions/productlisting";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  const delivery = 150;
  let totalAmount = 0.0;
  let cartno = 0;
  for (let i = 0; i < cart.products.length; i++) {
    totalAmount =
      totalAmount +
      parseFloat(cart.products[i].price) * parseInt(cart.products[i].count);
    cartno += parseInt(cart.products[i].count);
  }
  return (
    <ContentTemplate>
      <ProductListing
        products={cart.products}
        productListingPageType={"cart"}
        title="cart"
        showQuantity={true}
      />

      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Total Amount</h6>
            <small class="text-muted">Total Amount USD</small>
          </div>
          <span class="text-muted">${totalAmount}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Delivery Fee</h6>
            <small class="text-muted">Fast track</small>
          </div>
          <span class="text-muted">${delivery}</span>
        </li>
      </ul>
    </ContentTemplate>
  );
};
export default CartPage;
