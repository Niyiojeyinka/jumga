import CountLoveCount from "../components/cartlovecount";
import SocialLinks from "../components/sociallinks";
import Logo from "../components/logo";

const SidebarMobile = () => {
  return (
    <div className="sidebar pl-4 pr-2 py-4">
      <Logo width="35" marginLeft="3%" />
      <div className="mt-3">
        <CountLoveCount />
      </div>
      <div>
        <div className="p-2 mob-each-link">
          <a>Home</a>
        </div>
        <div className="p-2 mob-each-link">
          <a>Sign In</a>
        </div>
        <div className="p-2 mob-each-link">
          <a>Sign Up</a>
        </div>
        <div className="p-2 mob-each-link">
          <a>Merchants</a>
        </div>
        <div className="p-2 mob-each-link">
          <a>Contact</a>
        </div>
      </div>
      <SocialLinks />
      <br></br>
      <span className="sub-email">contact@jumga.com</span>
      <br></br>
      <span className="tagline"> The Best Price you can trust</span>
    </div>
  );
};

export default SidebarMobile;
