const Breadcrumb = (props) => {
  return (
    <div class="btn-group btn-breadcrumb">
      <a href="#" class="btn btn-default">
        <i class="fa fa-home"></i>
      </a>
      <a href="#" class="btn btn-default">
        Products
      </a>
      <a href="#" class="btn btn-default">
        {props.category}
      </a>
      <a href="#" class="btn btn-default">
        {props.name}
      </a>
    </div>
  );
};
export default Breadcrumb;
