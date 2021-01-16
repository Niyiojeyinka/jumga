import { Route, Redirect, useLocation } from "react-router-dom";

const AuthRoute = ({ children, ...rest }) => {
  const { state } = useLocation();

  return (
    <Route
      {...rest}
      render={(location) => {
        return false ? children : <Redirect to={state?.from || "login"} />;
      }}
    />
  );
};

export default AuthRoute;
