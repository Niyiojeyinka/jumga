import Logo from "../components/logo";
import Menu from "../components/menu";
import CountLoveCount from "../components/cartlovecount";
import SocialLinks from "../components/sociallinks";
const HeaderTopDesktop = () => {
  return (
    <div className="desk-header">
      <div className="color-lightgray p-2 color-text-black header-text-style">
        <span className="email-line">
          <i className="fa fa-envelope"></i>
          <span className="sub-email">contact@jumga.com</span>|
          <span className="tagline"> The Best Price you can trust</span>
        </span>
        <SocialLinks />
        <span className="auth-line">
          <span className="sub-email">Sign In</span>|
          <span className="tagline"> Sign Up</span>
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
