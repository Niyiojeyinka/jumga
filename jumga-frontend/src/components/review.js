import reviewprofile from "../assets/images/review1.jpg";
const Review = () => {
  return (
    <div className="p-2  ml-2 border col-sm-12 col-md-6 col-lg-6 col-xl-6 rounded bg-white review-one row">
      <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <img src={reviewprofile} />
      </div>
      <div className="hold-rev col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
        <b>Solomon Chroncitical</b>
        <br></br>
        <i>Merchant</i>
        <br></br> <br></br>
        <p className="p-2">
          Checkboxes are used if you want the user to select any number of
          options from a list of preset options.
        </p>
      </div>
    </div>
  );
};
export default Review;
