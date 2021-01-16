import { useSelector } from "react-redux";
import extractsysvars from "../helpers/getsystemvars";
const ContactRight = () => {
  const systemvar = useSelector((store) => store.systemvar);
  const supportMobile = extractsysvars(systemvar, "supportMobile");
  return (
    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 p-5">
      <span className="color-lightgray call-icon-circle">
        <i className="fa fa-phone text-yellow"></i>
      </span>
      <strong>
        <a href={`tel:${supportMobile}`}>{supportMobile}</a>
      </strong>
      <br></br>
      <br></br>
      <span className="small-call-text">support 24/7 time</span>
    </div>
  );
};

export default ContactRight;
