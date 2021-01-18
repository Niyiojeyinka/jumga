import ContentTemplate from "./contenttemplate";
import { useSelector } from "react-redux";
import ProductListing from "../divisions/productlisting";
import { Redirect } from "react-router-dom";

const WishList = () => {
  const auth = useSelector((store) => store.auth);

  const wishlist = useSelector((store) => store.wishlist);

  if (auth.loggedIn) {
    return (
      <ContentTemplate>
        <ProductListing
          products={wishlist.products}
          showAddToWishlistBtn={false}
          title="Wishlist"
        />
      </ContentTemplate>
    );
  } else {
    return <Redirect to={"/customer/login"} />;
  }
};
export default WishList;
