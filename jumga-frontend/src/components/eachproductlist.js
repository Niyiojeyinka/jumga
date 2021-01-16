import { useDispatch, useSelector } from "react-redux";
import tv from "../assets/images/tv.jpg";
import { BACKEND_BASE_URL } from "../helpers/constant";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Redirect } from "react-router-dom";
import { useState } from "react";
import addtowishlist from "../actions/storewishlist";
import addtocart from "../actions/storecart";

const EachProductList = (props) => {
  const auth = useSelector((store) => store.auth);
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addtocart(id));
    alert.show("added to cart!");
  };

  const addToWishlist = (id) => {
    if (auth.loggedIn) {
      dispatch(addtowishlist(id));
      alert.show("added to wishlist!");
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

  const wishlist = props.showAddToWishlistBtn ? (
    <button
      onClick={() => {
        addToWishlist(props.product.id);
      }}
      className="btn color-yellow m-2"
    >
      <i className="fa fa-heart text-white"></i>
    </button>
  ) : (
    <></>
  );

  if (redirectTo == "") {
    return (
      <div className="each-product-list m-2">
        <div style={{ display: "inline" }}>
          <img
            src={
              props.product.images[0] !== undefined
                ? BACKEND_BASE_URL + "" + props.product["images"][0].slug
                : "default"
            }
            width="30%"
            alt={`${props.product.name} image`}
          />
        </div>
        <div style={{ display: "inline-block" }}>
          <div className="py-2">
            <small>{props.product.name}</small>
            <br></br>
            <br></br>
            <strong className="product-list-tile-price">
              ${props.product.price}
            </strong>
          </div>
        </div>

        <div
          style={{ display: "none" }}
          className="container-fluid each-product-overlay p-3"
        >
          <button
            onClick={() => {
              addToCart(props.product.id);
            }}
            className="btn color-yellow m-3"
          >
            <i className="fa fa-shopping-cart text-white"></i>
          </button>
          {wishlist}
        </div>
      </div>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};
export default EachProductList;
