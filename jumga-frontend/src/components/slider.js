import bannerOne from "../assets/images/banner1.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Slider = () => {
  const slider = useSelector((store) => store.slider);
  return (
    <div>
      <Link to={slider.link}>
        <img src={slider.image} width="100%" />
      </Link>
    </div>
  );
};

export default Slider;
