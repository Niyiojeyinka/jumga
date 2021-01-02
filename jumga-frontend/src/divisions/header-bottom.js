import Categories from "../components/categories";
import MidDiv from "../components/middiv";
import ContactRight from "../components/contactright";

const HeaderBottom = (props) => {
  return (
    <div className="row">
      <Categories />
      <MidDiv>{props.children}</MidDiv>
      <ContactRight />
    </div>
  );
};

export default HeaderBottom;
