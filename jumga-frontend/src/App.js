import "./assets/css/colors.css";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/productpage";
import RegisterPage from "./pages/registerpage";
import LoginPage from "./pages/loginpage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/page">
          <ProductPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
