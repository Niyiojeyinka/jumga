import ContentTemplate from "./contenttemplate";
import { useSelector } from "react-redux";
import ProductListing from "../divisions/productlisting";
import AuthCheck from "./authcheck";
const WishList = () => {
  const wishlist = useSelector((store) => store.wishlist);

  return (
    <AuthCheck>
      <ContentTemplate>
        <ProductListing
          products={wishlist.products}
          productListingPageType={"wishlist"}
          title="Wishlist"
        />
      </ContentTemplate>
    </AuthCheck>
  );
};
export default WishList;
