import styled from "styled-components";

const InfoList = styled.li`
  text-align: center;
  width: 33%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({ theme }) => theme.secondaryFontColor}
    font-weight: normal;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({ hairColor }) => hairColor || "#f94"};
    font-weight: normal;
    font-size: 0.8rem;
    padding: 1px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.5rem;
      margin-left: -3px;
    }
  }
`;

export default InfoList;
