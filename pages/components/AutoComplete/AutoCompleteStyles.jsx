import styled from "styled-components";

export const ContainerInput = styled.label`
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

export const InputSearch = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: ${props => (props.open ? "5px 5px 0 0" : "5px")};
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 0.85rem;
  padding: 10px 15px;

  align: center;
  width: 95%;
`;
