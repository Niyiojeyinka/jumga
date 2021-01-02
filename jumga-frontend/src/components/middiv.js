const MidDiv = (props) => {
  return (
    <div className="container col-sm-12 col-md-7 col-lg-7 col-xl-7 px-5">
      <div>
        <input
          type="search"
          name="search"
          className="search-input p-3 form-control m-3"
        />
        <button className="search-btn btn p-2 color-yellow text-white">
          Search
        </button>
      </div>
      {props.children}
    </div>
  );
};
export default MidDiv;
