import { useSelector } from "react-redux";
import extractsysvars from "../helpers/getsystemvars";

const SocialLinks = () => {
  const systemvar = useSelector((store) => store.systemvar);
  const facebook = extractsysvars(systemvar, "facebook");
  const twittter = extractsysvars(systemvar, "twittter");
  const instagram = extractsysvars(systemvar, "instagram");
  return (
    <span className="social-line">
      <a href={facebook}>
        <i className="fa fa-facebook"></i>
      </a>
      <a href={twittter}>
        <i className="fa fa-twitter"></i>
      </a>
      <a href={instagram}>
        <i className="fa fa-instagram"></i>
      </a>
    </span>
  );
};

export default SocialLinks;
