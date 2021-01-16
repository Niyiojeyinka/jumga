import logo from "../assets/images/logo1.png";

const Logo = (props) => {
  return (
    <a href="/">
      {" "}
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
    </a>
  );
};

export default Logo;
