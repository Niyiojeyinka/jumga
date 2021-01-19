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

              <small>Dispatch Rider</small>
            </div>
            <li>
              <a href="#">Manage Orders</a>
            </li>
            <li>
              <a href="#">Withdrawal</a>
            </li>

            <li>
              <a href="#">Payment Settings</a>
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
            </div>
          </nav>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default MerchantTemplate;
