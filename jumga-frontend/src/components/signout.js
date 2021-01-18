import auth from "../actions/auth";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { useState } from "react";
const Signout = () => {
  const myauth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    dispatch(auth({}));
    cookies.remove("auth");
    window.location.reload();
    setRedirect(true);
  };
  //signout in backend later
  if (redirect) {
    return <Redirect to={`/${myauth.userType}/login`} />;
  }
  return (
    <Link className="ml-2 text-danger" onClick={handleClick}>
      Sign Out
    </Link>
  );
};

export default Signout;
