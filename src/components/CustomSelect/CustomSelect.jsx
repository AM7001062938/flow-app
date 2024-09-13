import React from "react";
import Select, { components } from "react-select";
// import "./CustomSelect.css"; // Import your CSS file here
import Images from "../../images";

// Custom Dropdown Indicator
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={Images.expand}
        alt="dropdown arrow"
        style={{ width: "15px", height: "15px" }}
      />
    </components.DropdownIndicator>
  );
};

// Custom Clear Indicator (to remove it)
const ClearIndicator = () => null;

// Custom Indicator Separator (to remove it)
const IndicatorSeparator = () => null;

const customStyles = (bg, radius) => ({
  control: (base) => ({
    ...base,
    borderRadius: radius,
    borderColor: "#B7BBC170",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#aaa",
    },
    cursor: "pointer",
    maxWidth: "100%",
    backgroundColor: bg,
    // backgroundOpacity: "12%",
    color: "rgba(0,0,0,0.5)",
    padding: "0.1rem 0.1rem",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "0px 8px",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  clearIndicator: (base) => ({
    ...base,
    display: "none",
  }),
});

const CustomSelect = ({
  options,
  placeholder,
  bg,
  radius,
  changeValue,
  value,
  idx,
  placement,
  multiple = false,
}) => {
  return (
    <Select
      components={{ DropdownIndicator, ClearIndicator, IndicatorSeparator }}
      styles={customStyles(bg, radius)}
      options={options}
      className="text-start w-full"
      placeholder={placeholder}
      // onChange={({ value }) => {
      //   if (multiple) {
      //     changeValue(idx, value);
      //     return;
      //   }
      //   changeValue(value);
      // }}
      // // defaultValue={options.find((option) => option.value === value)}
      // value={options?.find((option) => option.value === value)}
      // menuPlacement={placement || "auto"}
    />
  );
};

export default CustomSelect;
