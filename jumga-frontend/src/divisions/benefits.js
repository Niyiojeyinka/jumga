import EachBenefit from "../components/eachbenefit";

const Benefits = () => {
  const featurelist = [
    {
      icon: "fa-cc-mastercard",
      text:
        "Checkboxes are used if you want the user to select any number of options from a list of preset options.",
    },
    {
      icon: "fa-calendar",
      text:
        "Checkboxes are used if you want the user to select any number of options from a list of preset options.",
    },
    {
      icon: "fa-check-square",
      text:
        "Checkboxes are used if you want the user to select any number of options from a list of preset options.",
    },
  ];

  const featurelistJSX = featurelist.map((eachlist, index) => {
    return <EachBenefit feature={eachlist} key={"el" + index} />;
  });
  return (
    <section className="container-fluid color-lightgray p-2 px-5 row">
      {featurelistJSX}
    </section>
  );
};

export default Benefits;
