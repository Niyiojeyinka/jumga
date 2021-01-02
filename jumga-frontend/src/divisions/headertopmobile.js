import Logo from "../components/logo";
import * as React from "react";
import SidebarMobile from "./sidebarmobile";
const HeaderTopMobile = () => {
  const [displayMobileSidebar, setDisplayMobileSidebar] = React.useState(false);

  const displaySidebar = displayMobileSidebar ? <SidebarMobile /> : <></>;

  return (
    <div className="mobile-header">
      <div className="mob-header p-3 d-flex justify-content-between">
        <Logo width="35" marginLeft="3%" />

        <i
          onClick={() => {
            setDisplayMobileSidebar(!displayMobileSidebar);
          }}
          className="fa fa-bars"
        ></i>
      </div>
      {displaySidebar}
    </div>
  );
};

export default HeaderTopMobile;
