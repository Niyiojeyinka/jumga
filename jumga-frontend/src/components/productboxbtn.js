const ProductBoxBtn = (props) => {
  const handleClick = (e) => {
    if (props.data.disabled) {
      e.target.setAttribute("disabled", "");
    } else {
      e.target.removeAttribute("disabled", "");
    }
    props.handleClick();
  };

  if (props.type == "light") {
    return (
      <button onClick={handleClick} className="btn btn-outline-dark">
        <i className={`text-dark fa fa-${props.data.icon}`}></i>
        {props.data.label}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} className="btn btn-dark ml-2">
        <i className={`text-white fa fa-${props.data.icon}`}></i>
        {props.data.label}
      </button>
    );
  }
};

export default ProductBoxBtn;
