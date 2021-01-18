import ContentTemplate from "./contenttemplate";
import { useSelector } from "react-redux";
import ProductListing from "../divisions/productlisting";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <ContentTemplate>
      <ProductListing
        products={cart.products}
        productListingPageType={"cart"}
        title="cart"
        showQuantity={true}
      />
    </ContentTemplate>
  );
};
export default CartPage;
