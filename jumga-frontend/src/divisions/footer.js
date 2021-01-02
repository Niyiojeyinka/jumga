import FooterLeft from "./footerleft";
import FooterMiddle from "./footermiddle";
import FooterRight from "./footerright";
const Footer = () => {
  return (
    <footer className="container-fluid row color-lightgray full-width">
      <FooterLeft />
      <FooterMiddle />
      <FooterRight />
    </footer>
  );
};

export default Footer;
