import HeaderBottom from "./header-bottom";
import HeaderTopDesktop from "./headertopdesktop";
import HeaderTopMobile from "./headertopmobile";

const Header = (props) => {
  return (
    <>
      <header>
        <HeaderTopMobile />
        <HeaderTopDesktop />
      </header>
    </>
  );
};

export default Header;
