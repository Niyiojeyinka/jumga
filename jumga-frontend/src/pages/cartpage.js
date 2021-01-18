import ContentTemplate from "./contenttemplate";
import { useSelector } from "react-redux";
import ProductListing from "../divisions/productlisting";
import { Redirect } from "react-router-dom";
import AuthCheck from "./authcheck";
const CartPage = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <ContentTemplate>
      <ProductListing
        products={cart.products}
        productListingPageType={"cart"}
        title="cart"
      />
    </ContentTemplate>
  );
};
export default CartPage;
