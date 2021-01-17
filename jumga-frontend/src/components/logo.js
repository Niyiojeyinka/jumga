import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";
const Logo = (props) => {
  return (
    <Link to="/">
      <div
        style={{
          marginLeft: props.marginLeft,
          display: "inline-block",
          marginRight: props.marginRight,
          maxWidth: props.width * 4.2 + "px",
          paddingLeft: "1%",
        }}
      >
        <img src={logo} style={{ width: props.width + "px" }} />
        <strong
          className="color-text-black logo"
          style={{ fontSize: props.width - 10 + "px" }}
        >
          JUMGA
        </strong>
      </div>
    </Link>
  );
};

export default Logo;
