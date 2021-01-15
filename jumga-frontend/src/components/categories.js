import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Categories = () => {
  const [displayCategory, setDisplayCategory] = React.useState(true);
  let categoriesData = useSelector((store) => store.categories);
  categoriesData =
    categoriesData.body?.data.categories != undefined
      ? categoriesData.body?.data.categories
      : [];

  const x = categoriesData.map((category, index) => {
    return (
      <li key={index}>
        <Link to={`/category/${category.slug}`}>{category.name}</Link>
      </li>
    );
  });
  const categoriesList = (
    <div className="cat-box">
      <ul>{x}</ul>
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
