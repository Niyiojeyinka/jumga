import EmptyTemplate from "./empttemplate";

const ContactPage = () => {
  const handleChange = () => {};
  return (
    <EmptyTemplate>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-yellow">Contact Us</h4>
          <p className="card-description">
            {" "}
            Got a question/feedback? send us a message here,we will get back to
            you.
          </p>
          <form className="forms-sample">
            <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>

            <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label for="exampleTextarea1">Textarea</label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
            <button type="submit" className="btn color-yellow text-white mr-2">
              Send Message
            </button>
            <button className="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </EmptyTemplate>
  );
};
export default ContactPage;
