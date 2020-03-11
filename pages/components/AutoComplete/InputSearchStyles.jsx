import styled from "styled-components";

const InputSearch = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: ${props => (props.open ? "5px 5px 0 0" : "5px")};
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 0.85rem;
  padding: 10px 15px;

  align: center;
  width: 95%;
`;

export default InputSearch;
