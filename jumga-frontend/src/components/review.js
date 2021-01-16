import reviewprofile from "../assets/images/review1.jpg";
const Review = (props) => {
  return (
    <div className="p-2  ml-2 border col-sm-12 col-md-6 col-lg-6 col-xl-6 rounded bg-white review-one row">
      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <img src={props.review.image} />
      </div>
      <div className="hold-rev col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
        <b>{props.review.name}</b>
        <br></br>
        <i> {props.review.role}</i>
        <br></br> <br></br>
        <p className="p-2">{props.review.review}</p>
      </div>
    </div>
  );
};
export default Review;
