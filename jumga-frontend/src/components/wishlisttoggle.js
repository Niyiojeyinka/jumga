import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Redirect } from "react-router-dom";
import removeFromProducts from "../helpers/removefromproducts";
import addtowishlist, { removefromwishlist } from "../actions/storewishlist";

const WishlistToggle = (props) => {
  const [actionAdd, setActionAdd] = useState(true);
  const [redirectTo, setRedirectTo] = useState("");
  const { product } = props;
  const auth = useSelector((store) => store.auth);
  const wishlist = useSelector((store) => store.wishlist);
  const products = wishlist.products;
  const alert = useAlert();
  const dispatch = useDispatch();

  const removeFromWishlist = (product, products) => {
    const newProducts = removeFromProducts(product.id, products);
    dispatch(removefromwishlist(newProducts));
    alert.success("product removed wishlist!");
  };

  const addToWishlist = (product) => {
    if (auth.loggedIn) {
      dispatch(addtowishlist(product));
      alert.success("added to wishlist!");
    } else {
      //redirect to login
      alert.show("You need to sign in first!");
      confirmAlert({
        title: "You need to sign in first!",
        message: "Please sign in or rgister.",
        buttons: [
          {
            label: "Register",
            onClick: () => setRedirectTo("/customer/register"),
          },
          {
            label: "Sign in",
            onClick: () => setRedirectTo("/customer/login"),
          },
        ],
      });
    }
  };
  if (redirectTo == "") {
    return (
      <button
        onClick={() => {
          if (actionAdd) {
            addToWishlist(product);
            if (auth.loggedIn) {
              setActionAdd(false);
            }
          } else {
            removeFromWishlist(product, products);
            setActionAdd(true);
          }
        }}
        className="btn color-yellow text-white"
      >
        {actionAdd ? "Add to Wishlist" : "Remove from Wishlist"}
      </button>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};

export default WishlistToggle;
