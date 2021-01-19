import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../assets/images/default-product.png";
import { BACKEND_BASE_URL } from "../helpers/constant";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Redirect } from "react-router-dom";
import { useState } from "react";
import addtowishlist, { removefromwishlist } from "../actions/storewishlist";
import addtocart, { removefromcart } from "../actions/storecart";
import { Link } from "react-router-dom";

const EachProductList = (props) => {
  const auth = useSelector((store) => store.auth);
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  let products = cart.products;
  const [toggleWishIcon, setToggleWishIcon] = useState(false);
  const [toggleCartIcon, setToggleCartIcon] = useState(false);

  const addToCart = (product, products, quantity) => {
    dispatch(addtocart({ product, no: quantity }));
    alert.success("product added to cart!");
  };

  const removeCart = (product) => {
    dispatch(removefromcart(product));
    alert.success("Removed from cart!");
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

  const removeWishlist = (product) => {
    dispatch(removefromwishlist(product));
    alert.success("Removed from wishlist!");
  };

  const wishicon = toggleWishIcon ? "fa-heart" : "fa-heart-o";
  const carticon = toggleCartIcon ? "fa-shopping-cart" : "fa-cart-plus";

  const wishlist = props.productListingPageType ? (
    <button
      onClick={() => {
        if (!toggleWishIcon) {
          addToWishlist(props.product);
          setToggleWishIcon(true);
        } else {
          removeWishlist(props.product);
          setToggleWishIcon(false);
        }
      }}
      className="btn bg-white m-2"
    >
      <i className={`fa ${wishicon} text-yellow`}></i>
    </button>
  ) : (
    <button
      onClick={() => {
        if (!toggleCartIcon) {
          addToCart(props.product);
          setToggleCartIcon(true);
        } else {
          removeCart(props.product);
          setToggleCartIcon(false);
        }
      }}
      className="btn bg-white m-2"
    >
      <i className="fa fa-trash text-danger"></i>
    </button>
  );

  if (redirectTo == "") {
    return (
      <div className="each-product-list m-2">
        <Link
          to={`/product/${props.product.id}/${encodeURI(props.product.name)}`}
        >
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
        </Link>
        <div style={{ display: "inline-block" }}>
          <div className="py-1">
            <Link
              to={`/product/${props.product.id}/${encodeURI(
                props.product.name
              )}`}
            >
              <small>{props.product.name}</small>
              <br></br>
              <strong className="product-list-tile-price">
                ${props.product.price}
              </strong>
            </Link>
            <br></br>
            <button
              onClick={() => {
                if (!toggleCartIcon) {
                  addToCart(props.product);
                  setToggleCartIcon(true);
                } else {
                  removeCart(props.product);
                  setToggleCartIcon(false);
                }
              }}
              className="btn bg-white m-3"
            >
              <i className={`fa ${carticon} text-yellow`}></i>
            </button>
            {wishlist}
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};
export default EachProductList;
