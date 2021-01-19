import * as React from "react";
import { Link } from "react-router-dom";
const MerchantTemplate = (props) => {
  const [toggleSidebar, setToggleSidebar] = React.useState(false);

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <div className="wrapper">
        <nav id="sidebar" className={`${toggleSidebar ? "active" : ""}`}>
          <Link to="/">
            <div className="sidebar-header">
              <h3>JUMGA</h3>
            </div>
          </Link>

          <ul className="list-unstyled components">
            <div className="p-3">
              <b>John Doe</b>
              <br></br>

              <small>Merchant Account</small>
            </div>

            <li className={`${toggleSidebar ? "active" : ""}`}>
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Products
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Add New Product</a>
                </li>
                <li>
                  <a href="#">Manage Product</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Withdrawal *</a>
            </li>
            <li>
              <a href="#">Manage Orders</a>
            </li>
            <li>
              <a href="#">Payment Settings*</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <a className="article">Sign Out</a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                onClick={handleClick}
                type="button"
                id="sidebarCollapse"
                className={`navbar-btn ${toggleSidebar ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <small>*Redundant:now using flutterwave subaccount API</small>
            </div>
          </nav>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default MerchantTemplate;
