import Logo from "../components/logo";
import { useSelector } from "react-redux";
import extractsysvars from "../helpers/getsystemvars";
const FooterLeft = () => {
  const systemvar = useSelector((store) => store.systemvar);
  const supportMobile = extractsysvars(systemvar, "supportMobile");
  const contactEmail = extractsysvars(systemvar, "contactEmail");
  const address = extractsysvars(systemvar, "address");

  return (
    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 ">
      <div className="p-5">
        <Logo width="60" />
      </div>
      <div className="p-4">
        Address: {address}
        <br></br>Phone: {supportMobile}
        <br></br> Email: {contactEmail}
      </div>
    </div>
  );
};

export default FooterLeft;
