import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../assets/images/default-product.png";
import { BACKEND_BASE_URL } from "../helpers/constant";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Redirect } from "react-router-dom";
import { useState } from "react";
import addtowishlist from "../actions/storewishlist";
import addtocart from "../actions/storecart";
import { Link } from "react-router-dom";
import addToCartArray from "../helpers/addtocart";

const EachProductList = (props) => {
  const auth = useSelector((store) => store.auth);
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  let products = cart.products;

  const addToCart = (product, products, quantity) => {
    const newProducts = addToCartArray(product, products, quantity, true);
    dispatch(addtocart(newProducts));
    alert.success("product(s) added to cart!");
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

  const wishlist = props.showAddToWishlistBtn ? (
    <button
      onClick={() => {
        addToWishlist(props.product);
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
      <Link
        to={`/product/${props.product.id}/${encodeURI(props.product.name)}`}
      >
        <div className="each-product-list m-2">
          <div style={{ display: "inline" }}>
            <img
              src={
                props.product.images[0] !== undefined
                  ? BACKEND_BASE_URL + "" + props.product["images"][0].slug
                  : defaultImage
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
                addToCart(props.product, products, 1);
              }}
              className="btn color-yellow m-3"
            >
              <i className="fa fa-shopping-cart text-white"></i>
            </button>
            {wishlist}
          </div>
        </div>
      </Link>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};
export default EachProductList;
