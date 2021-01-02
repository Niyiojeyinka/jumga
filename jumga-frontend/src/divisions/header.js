import HeaderBottom from "./header-bottom";
import HeaderTopDesktop from "./headertopdesktop";
import HeaderTopMobile from "./headertopmobile";

const Header = (props) => {
  return (
    <>
      <header>
        <HeaderTopMobile />
        <HeaderTopDesktop />
        <HeaderBottom>{props.children}</HeaderBottom>
      </header>
    </>
  );
};

export default Header;
