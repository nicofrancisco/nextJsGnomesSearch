import styled from "styled-components";

const OrderButton = styled.button`
  background: ${({ active, theme }) => (active ? theme.hoverColor : "inherit")};
  border: 0.5px solid
    ${({ active, theme }) => (active ? theme.hoverColor : "#e9e8e8")};
  box-sizing: border-box;
  color: ${({ active, theme }) => (active ? theme.hoverFontColor : "#666")};
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 0.975rem;
  font-weight: lighter;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 16px 15px;
  width: ${({ width }) => width || "50%"};
  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.hoverColor : "#d8e9eb"};
  }
  @media screen and (min-width: 630px) {

  }
  @media screen and (min-width: 990px) {
    width: ${({ highScreenWidth }) => highScreenWidth || "16%"};
  }
`;

export default OrderButton;
