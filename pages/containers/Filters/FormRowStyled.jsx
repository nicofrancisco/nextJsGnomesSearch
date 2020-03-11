import styled from "styled-components";
import HomeWrapper  from "./../Home/HomeWrapperStyled";

const FormRow = HomeWrapper.withComponent("div").extend`
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  width: 100%;
`;

export default FormRow;
