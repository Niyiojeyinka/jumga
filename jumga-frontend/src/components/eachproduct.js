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
import ProductBoxBtn from "./productboxbtn";
import btnData from "./btntransitiondata";
import NumberInput from "./numberinput";
import { removefromcart } from "../actions/storecart";
const EachProductList = (props) => {
  const auth = useSelector((store) => store.auth);
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const products = cart.products;
  const [lightBtnCtrl, setLightBtnCtrl] = useState(true);
  const [lightBtnData, setLightBtnData] = useState("");
  const [darkBtnCtrl, setDarkBtnCtrl] = useState(true);
  const [darkBtnData, setDarkBtnData] = useState("");

  const handleLightClick = (product) => {
    if (props.productListingPageType == "normal") {
      if (lightBtnCtrl) {
        //default state
        //add to wishlist
        setLightBtnData(btnData.loading);
        if (addToWishlist(product)) {
          setLightBtnData(btnData.wishlist.remove);
          setLightBtnCtrl(false);
        }
      } else {
        //switch
        //remove from wishlist
        setLightBtnData(btnData.loading);
        removeWishlist(product);
        setLightBtnData(btnData.wishlist.add);
        setLightBtnCtrl(false);
      }
    }

    //light no wishlist
  };
  const handleDarkClick = (product, products, quantity) => {
    if (props.productListingPageType == "normal") {
      if (darkBtnCtrl) {
        //default state
        //add to wishlist
        setDarkBtnData(btnData.loading);
        if (addToCart(product, products, quantity)) {
          setDarkBtnData(btnData.cart.remove);
          setDarkBtnCtrl(false);
        }
      } else {
        //switch
        //remove from cart
        setDarkBtnData(btnData.loading);
        dispatch(removefromcart(product));
        alert.success("product removed from cart!");
        setDarkBtnData(btnData.cart.add);
        setDarkBtnCtrl(true);
      }
    } else if (props.productListingPageType == "wishlist") {
      //remove from wishlist
      setDarkBtnData(btnData.loading);
      removeWishlist(product);
      setDarkBtnData(btnData.wishlist.add);
      setDarkBtnCtrl(false);
    } else if (props.productListingPageType == "cart") {
      //remove from cart
      setDarkBtnData(btnData.loading);
      dispatch(removefromcart(product));
      alert.success("product removed from cart!");
      setDarkBtnData(btnData.cart.add);
      setDarkBtnCtrl(false);
    }
  };

  const addToCart = (product, products, quantity) => {
    dispatch(addtocart({ product, no: quantity }));
    alert.success("product(s) added to cart!");
    return true;
  };

  const addToWishlist = (product) => {
    if (auth.loggedIn) {
      dispatch(addtowishlist(product));
      alert.success("added to wishlist!");
      return true;
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
      return false;
    }
  };

  const removeWishlist = (product) => {
    dispatch(removefromwishlist(product));
    alert.success("Removed from wishlist!");
  };

  let lightBtnDataToUse;
  if (props.productListingPageType == "normal") {
    lightBtnDataToUse =
      lightBtnData == "" ? btnData.wishlist.add : lightBtnData;
  }

  let darkBtnDataToUse;
  if (props.productListingPageType == "normal") {
    darkBtnDataToUse = darkBtnData == "" ? btnData.cart.add : darkBtnData;
  } else if (props.productListingPageType == "wishlist") {
    darkBtnDataToUse = btnData.wishlist.remove;
  } else if (props.productListingPageType == "cart") {
    darkBtnDataToUse = btnData.cart.remove;
  }

  const displayLightBtnJSX = btnData[props.productListingPageType]["light"] ? (
    <ProductBoxBtn
      type={"light"}
      data={lightBtnDataToUse}
      handleClick={() => {
        handleLightClick(props.product);
      }}
    />
  ) : (
    <></>
  );

  const displayDarkBtnJSX = btnData[props.productListingPageType]["dark"] ? (
    <ProductBoxBtn
      type={"dark"}
      data={darkBtnDataToUse}
      handleClick={() => {
        handleDarkClick(props.product, products, 1);
      }}
    />
  ) : (
    <></>
  );

  const numInput = props.showQuantity ? (
    <NumberInput
      max={props.product.in_stock}
      getValue={(value) => {
        //overide new value
        dispatch(
          addtocart({ product: props.product, no: value, override: true })
        );
      }}
      defaultValue={props.product.count}
    />
  ) : (
    <></>
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
                <span className="guarantee">{props.product.merchant.name}</span>
              </div>
            </div>
            <hr></hr>
            <div className="card-body">
              <div className="text-left px-3">{numInput}</div>
              <div className="text-right buttons">
                {props.children}
                {displayLightBtnJSX}

                {displayDarkBtnJSX}
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
