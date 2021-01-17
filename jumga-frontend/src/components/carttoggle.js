import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import addtocart, { removefromcart } from "../actions/storecart";
import { Redirect } from "react-router-dom";
import addToCartArray from "../helpers/addtocart";
const CartToggle = (props) => {
  const [actionAdd, setActionAdd] = useState(true);
  const { product } = props;
  const cart = useSelector((store) => store.cart);
  let products = cart.products;
  const alert = useAlert();
  const dispatch = useDispatch();
  const [redirectTo, setRedirectTo] = useState("");

  const addToCart = (product, products, quantity) => {
    const newProducts = addToCartArray(product, products, quantity, true);
    dispatch(addtocart(newProducts));
    alert.success("product(s) added to cart!");
  };
  if (redirectTo == "") {
    return (
      <button
        onClick={() => {
          products = products == undefined ? [] : products;
          addToCart(product, products, props.quantity);
          setActionAdd(false);
          setRedirectTo("/customer/cart");
        }}
        className="btn color-yellow text-white m-2"
      >
        {actionAdd ? "Add to Cart" : "Proceed to Checkout"}
      </button>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};

export default CartToggle;
