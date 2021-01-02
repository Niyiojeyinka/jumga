import Logo from "../components/logo";

const FooterLeft = () => {
  return (
    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 ">
      <div className="p-5">
        <Logo width="60" />
      </div>
      <div className="p-4">
        Address: 60-49 Road 11378 New York
        <br></br>Phone: +234 7086 82
        <br></br> Email: contact@jumga.com
      </div>
    </div>
  );
};

export default FooterLeft;
