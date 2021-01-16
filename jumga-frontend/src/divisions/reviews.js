import Review from "../components/review";
import { useSelector } from "react-redux";
const Reviews = () => {
  const reviews = useSelector((store) => store.frontreviews);

  const reviewsJSX = reviews.map((review, index) => (
    <Review review={review} key={"r" + index} />
  ));
  return <div className="row">{reviewsJSX}</div>;
};
export default Reviews;
