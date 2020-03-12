import React from "react";
import SelectComponent from "./SelectStyled";


const Select = ({
  updateState,
  stateName,
  defaultValue,
  items,
  state,
  maxWidth,
  updateCurrentPage
}) => (
  <SelectComponent maxWidth={maxWidth}>
    <select
      value={state && state[stateName] && state[stateName]}
      onChange={Select.onChange(updateState, updateCurrentPage)}
    >
      {defaultValue && [defaultValue, ...items].map(item => (
        <option
          value={item}
          key={item}
          defaultChecked={state[stateName] === item}
        >
          {item}
        </option>
      ))}
    </select>
  </SelectComponent>
);


Select.onChange = (updateState, updateCurrentPage) => (
  event
) => {
  event.preventDefault();
  updateState(event.currentTarget.value);
  updateCurrentPage(0);
};

export default Select;
