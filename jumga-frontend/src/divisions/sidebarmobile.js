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
  const auth = useSelector((store) => store.auth);
  const topAuthJSX = auth.loggedIn ? (
    <div className="p-2 mob-each-link">
      <Link to={`/${auth.userType}/dashboard`}>Dashboard</Link>
    </div>
  ) : (
    <>
      <div className="p-2 mob-each-link">
        <Link to="/customer/login">Sign In</Link>
      </div>
      <div className="p-2 mob-each-link">
        <Link to="/customer/register">Sign Up</Link>
      </div>
    </>
  );

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
        {topAuthJSX}
        <div
          data-toggle="collapse"
          data-target="#merchant"
          className="p-2 mob-each-link"
        >
          <a>Merchants</a>
        </div>
        <div id="merchant" class="collapse">
          <Link to="/merchant/register">
            <div className="py-1 px-4 mob-each-link"> Sign Up</div>
          </Link>
          <Link to="/merchant/login">
            <div className="py-1 px-4 mob-each-link"> Sign In</div>
          </Link>
        </div>
        <div
          data-toggle="collapse"
          data-target="#dispatcher"
          className="p-2 mob-each-link"
        >
          <a>Dispatchers</a>
        </div>
        <div id="dispatcher" class="collapse">
          <Link to="/dispatcher/register">
            <div className="py-1 px-4 mob-each-link"> Sign Up</div>
          </Link>
          <Link to="/dispatcher/login">
            <div className="py-1 px-4 mob-each-link"> Sign In</div>
          </Link>
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
