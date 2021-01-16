const EachBenefit = (props) => {
  return (
    <div className="each-benefit container-fluid color-lightgray p-2 bg-white border col-sm-12 col-md-3 col-lg-3 col-xl-3 my-3 text-center">
      <i className={`fa ${props.feature.icon} text-yellow benefit-icon`}></i>
      <br></br>
      <p className="p-3">{props.feature.text}</p>
    </div>
  );
};

export default EachBenefit;
