import Logo from "../components/logo";
import Menu from "../components/menu";
import CountLoveCount from "../components/cartlovecount";
import SocialLinks from "../components/sociallinks";
import { useSelector } from "react-redux";
import extractsysvars from "../helpers/getsystemvars";
import { Link } from "react-router-dom";
const HeaderTopDesktop = () => {
  let systemvarData = useSelector((store) => store.systemvar);
  const contactemail = extractsysvars(systemvarData, "contactEmail");
  const tagline = extractsysvars(systemvarData, "tagline");

  return (
    <div className="desk-header">
      <div className="color-lightgray p-2 color-text-black header-text-style">
        <span className="email-line">
          <i className="fa fa-envelope"></i>
          <span className="sub-email">{contactemail}</span>|
          <span className="tagline"> {tagline}</span>
        </span>
        <SocialLinks />
        <span className="auth-line">
          <span className="sub-email">
            <Link to="customer/login">Sign In</Link>
          </span>
          <span className="tagline">
            <Link to="customer/register">Sign Up</Link>
          </span>
        </span>
      </div>
      <div className="header-text-style">
        <Logo width="35" marginLeft="3%" />
        <Menu />
        <CountLoveCount />
      </div>
    </div>
  );
};

export default HeaderTopDesktop;
