import * as React from "react";
import { useAlert } from "react-alert";

const NumberInput = (props) => {
  const alert = useAlert();
  const [inputValue, setInputValue] = React.useState(1);
  const max = props.max;
  const convert = (value) => {
    return parseInt(value) ? value : false;
  };

  const saveChange = (value) => {
    setInputValue(parseInt(value));
    props.getValue(parseInt(value));
  };

  const handleChange = (e) => {
    if (props.max < e.target.value) {
      saveChange(props.max);
      alert.error("The max order is " + props.max);
    } else if (convert(e.target.value)) {
      saveChange(e.target.value);
    } else {
      saveChange(1);
    }
  };
  return (
    <span className="num-container-btn border">
      <button
        onClick={() => {
          saveChange(inputValue > 1 ? inputValue - 1 : 1);
        }}
        className="btn color-yellow text-white left"
      >
        <b>-</b>
      </button>
      <input
        type="number"
        min="1"
        max={max}
        value={inputValue}
        onChange={handleChange}
        placeholder={inputValue}
        className="num-input-style px-3 py-1"
      />
      <button
        onClick={() => {
          saveChange(inputValue < max ? inputValue + 1 : max);
        }}
        className="btn color-yellow text-white right"
      >
        <b>+</b>
      </button>
    </span>
  );
};

export default NumberInput;
