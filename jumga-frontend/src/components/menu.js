import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <span className="menu-container">
      <Link to="/">
        <i className="menu-active">Home</i>
      </Link>
      <span className="dropdown">
        <a
          data-toggle="dropdown"
          className="dropdown-toggle topdropdown-toggle"
        >
          Merchant
        </a>

        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/merchant/register">
            <small>Register</small>
          </Link>
          <Link className="dropdown-item" to="/merchant/login">
            <small>Login</small>
          </Link>
        </div>
      </span>

      <span className="dropdown">
        <a
          data-toggle="dropdown"
          className="dropdown-toggle topdropdown-toggle"
        >
          Dispatcher
        </a>

        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/dispatcher/register">
            <small>Register</small>
          </Link>
          <Link className="dropdown-item" to="/dispatcher/login">
            <small>Login</small>
          </Link>
        </div>
      </span>
      <a>Contact Us</a>
    </span>
  );
};
export default Menu;
