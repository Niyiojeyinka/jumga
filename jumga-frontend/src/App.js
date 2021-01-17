import "./assets/css/colors.css";
import "./assets/css/App.css";
import "./assets/css/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/productpage";
import RegisterPage from "./pages/registerpage";
import LoginPage from "./pages/loginpage";
import ContactPage from "./pages/contactpage";
import OrdersPage from "./pages/userdashboard/orderspage";
import PaymentsPage from "./pages/userdashboard/paymentspage";
import WishList from "./pages/wishlist";
import MerchantDashboard from "./pages/merchant/dashboard";
import RiderDashboard from "./pages/dispatchrider/dashboard";
import request from "./helpers/request";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import systemVariables from "./actions/systemvariables";
import storecategories from "./actions/storecategories";
import storerecentproducts, {
  storerandomproducts,
} from "./actions/storeproducts";
import storefrontreviews from "./actions/storefrontreviews";
import ScrollToTop from "./components/scrolltotop";
function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    //fetch data and dispatch
    const sysvarres = await request("page/systemvars/all", "POST", {
      names:
        '["contactemail","address","tagline","facebook","twitter","instagram","supportMobile"]',
    });
    //alert(sysvarres.status);
    const catres = await request("products/categories", "GET");
    const recentproducts = await request("products/recents/9/0", "GET");
    const randomproducts = await request("products/recents/9/10", "GET");
    const frontrevs = await request("page/frontreviews", "GET");

    dispatch(storefrontreviews(frontrevs.body.data.reviews));
    dispatch(storerandomproducts(randomproducts.body?.data.products));
    dispatch(storerecentproducts(recentproducts.body?.data.products));
    dispatch(systemVariables(sysvarres));
    dispatch(storecategories(catres));
  });
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/rider/dashboard">
            <RiderDashboard />
          </Route>
          <Route path="/merchant/dashboard">
            <MerchantDashboard />
          </Route>
          <Route
            path="/product/:id/:title"
            component={(props) => (
              <ProductPage {...props} key={window.location.pathname} />
            )}
          />

          <Route path="/wishlist">
            <WishList />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/payments">
            <PaymentsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/:type/register">
            <RegisterPage />
          </Route>
          <Route path="/:type/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
