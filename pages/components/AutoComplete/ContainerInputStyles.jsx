import styled from "styled-components";

const ContainerInput = styled.label`
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  width: ${props => props.maxWidth};

  & > span {
    display: ${props => (props.showLabel ? "block" : "none")};
  }
  option:hover{
    background-color:#298838;
  }

  ::-moz-selection {
  color: green !important;;
  background: light-blue !important;
  }

  ::selection {
    color: green !important;;
    background: light-blue !important;
  }
`;

export default ContainerInput
