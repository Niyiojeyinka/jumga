import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../assets/images/default-product.png";
import { BACKEND_BASE_URL } from "../helpers/constant";
import { useAlert } from "react-alert";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Redirect } from "react-router-dom";
import { useState } from "react";
import addtowishlist, { removefromwishlist } from "../actions/storewishlist";
import addtocart from "../actions/storecart";
import { Link } from "react-router-dom";
import addToCartArray from "../helpers/addtocart";
import striptags from "../helpers/striptag";
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

  const removeWishlist = (product) => {
    dispatch(removefromwishlist(product));
    alert.success("added to wishlist!");
  };

  const wishlist = props.showAddToWishlistBtn ? (
    <button
      onClick={() => {
        addToWishlist(props.product);
      }}
      className="btn btn-outline-dark"
    >
      <i className="fa fa-heart text-white"></i> add to wishlist
    </button>
  ) : (
    <button
      onClick={() => {
        removeWishlist(props.product);
      }}
      className="btn btn-outline-dark"
    >
      <i className="fa fa-trash  text-dark"></i> remove from wishlist
    </button>
  );

  if (redirectTo == "") {
    return (
      <>
        <div className="col-md-4 mt-2">
          <div className="card">
            <Link
              to={`/product/${props.product.id}/${encodeURI(
                props.product.name
              )}`}
            >
              <img
                src={
                  props.product.images[0] !== undefined
                    ? BACKEND_BASE_URL + "" + props.product["images"][0].slug
                    : defaultImage
                }
                alt={`${props.product.name} image`}
                className="card-img-top"
              ></img>
            </Link>

            <div className="card-body">
              <Link
                to={`/product/${props.product.id}/${encodeURI(
                  props.product.name
                )}`}
              >
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold">{props.product.name}</span>
                  <span className="font-weight-bold">
                    ${props.product.price}
                  </span>
                </div>
                <p className="card-text mb-1 mt-1">
                  {striptags(props.product.description).substring(1, 180)}
                </p>
              </Link>
              <div className="d-flex align-items-center flex-row">
                <small>from </small>
                <span className="guarantee">Merchant Name</span>
              </div>
            </div>
            <hr></hr>
            <div className="card-body">
              <div className="text-right buttons">
                {wishlist}
                <button
                  onClick={() => {
                    addToCart(props.product, products, 1);
                  }}
                  className="btn btn-dark ml-2"
                >
                  <i className="fa fa-shopping-cart text-white"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};
export default EachProductList;
