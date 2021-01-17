import EmptyTemplate from "./empttemplate";
import { useSelector } from "react-redux";
import ProductList from "../divisions/productslist";
import { Redirect } from "react-router-dom";

const WishList = () => {
  const auth = useSelector((store) => store.auth);

  const wishlist = useSelector((store) => store.wishlist);

  if (auth.loggedIn) {
    return (
      <EmptyTemplate>
        <ProductList
          products={wishlist.products}
          showAddToWishlistBtn={false}
          title="Wishlist"
        />
      </EmptyTemplate>
    );
  } else {
    return <Redirect to={"/customer/login"} />;
  }
};
export default WishList;
