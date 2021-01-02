import * as React from "react";

const Categories = () => {
  const [displayCategory, setDisplayCategory] = React.useState(true);
  const categoriesList = (
    <div className="cat-box">
      <ul>
        <li>Kitchen Appliancces</li>
        <li>Food & Drugs</li>
        <li>Electronics</li>
        <li>Books</li>
        <li>Mobile Phones</li>
        <li>Electronics</li>
        <li>Books</li>
        <li>Mobile Phones</li>
        <li>Computers</li>
        <li>others</li>
      </ul>
    </div>
  );

  const categories = displayCategory ? categoriesList : <></>;

  return (
    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 px-5 mt-2">
      <div className="cat-box-parent">
        <div
          onClick={() => {
            setDisplayCategory(!displayCategory);
          }}
          className="color-yellow btn-block p-2 text-center block cat-btn"
        >
          <span className="fa fa-bars text-white cat-bar"> </span>

          <strong className="text-white">All Categories </strong>

          <span className="fa fa-angle-down text-white cat-drop"> </span>
        </div>
        {categories}
      </div>
    </div>
  );
};
export default Categories;
