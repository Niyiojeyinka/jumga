import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthCheck = (props) => {
  const auth = useSelector((store) => store.auth);

  if (auth.loggedIn) {
    return <>{props.children}</>;
  } else {
    return <Redirect to={`/${props.type}/login`} />;
  }
};
export default AuthCheck;
