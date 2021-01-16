import Logo from "../components/logo";
import * as React from "react";
import SidebarMobile from "./sidebarmobile";
const HeaderTopMobile = () => {
  const [displayMobileSidebar, setDisplayMobileSidebar] = React.useState(false);
  const [icon, setIcon] = React.useState("fa-bars");

  const displaySidebar = displayMobileSidebar ? <SidebarMobile /> : <></>;

  return (
    <div className="mobile-header">
      <div className="mob-header p-3 d-flex justify-content-between">
        <Logo width="35" marginLeft="3%" />

        <i
          onClick={() => {
            if (!displayMobileSidebar) {
              setIcon("fa-close");
            } else {
              setIcon("fa-bars");
            }
            setDisplayMobileSidebar(!displayMobileSidebar);
          }}
          className={"fa " + icon}
        ></i>
      </div>
      {displaySidebar}
    </div>
  );
};

export default HeaderTopMobile;
