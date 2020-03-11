import styled from "styled-components";

const SelectComponent = styled.label`
  color: ${({ theme }) => theme.suggestionsTXT};
  display: block;
  font-size: 1.1rem;
  margin: 0;
  text-align: center;
  width: 96%;

  & select {
    appearance: none;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    color: #aaa;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: normal;
    height: 38px;
    line-height: 15px;
    padding: 0 15px;
    outline: 0;
    outline-color: transparent;
    text-align: center;
    text-indent: 0.01px;
    text-overflow: "";
    width: 100%;


    option {
      color: ${({ theme }) => theme.suggestionsTXT} !important;
    }
    
  }
  @media (min-width: 400px) {
    font-size: 1.2rem;
    & span {
      font-size: 1rem;
    }
  }
`;

export default SelectComponent;
