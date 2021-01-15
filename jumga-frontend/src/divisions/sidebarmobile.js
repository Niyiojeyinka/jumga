import CountLoveCount from "../components/cartlovecount";
import SocialLinks from "../components/sociallinks";
import Logo from "../components/logo";
import { useSelector } from "react-redux";
import extractsysvars from "../helpers/getsystemvars";
import { Link } from "react-router-dom";
const SidebarMobile = () => {
  let systemvarData = useSelector((store) => store.systemvar);
  const contactemail = extractsysvars(systemvarData, "contactEmail");
  const tagline = extractsysvars(systemvarData, "tagline");
  return (
    <div className="sidebar pl-4 pr-2 py-4">
      <Logo width="35" marginLeft="3%" />
      <div className="mt-3">
        <CountLoveCount />
      </div>
      <div>
        <div className="p-2 mob-each-link">
          <Link to="/">Home</Link>
        </div>
        <div className="p-2 mob-each-link">
          <Link to="/customer/login">Sign In</Link>
        </div>
        <div className="p-2 mob-each-link">
          <Link to="/customer/register">Sign Up</Link>
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
      <span className="sub-email">{contactemail}</span>
      <br></br>
      <span className="tagline"> {tagline}</span>
    </div>
  );
};

export default SidebarMobile;
