import styled from "styled-components";

const InfoList = styled.li`
  text-align: center;
  width: 25%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({ theme }) => theme.secondaryFontColor}
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({ hairColor }) => hairColor || "#f94"};
    font-weight: bold;
    font-size: 1.1rem;
    padding: 5px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.8rem;
      margin-left: -8px;
    }
  }

  @media screen and (min-width: 400px) {
    span:first-child {
      font-size: 1rem;
    }
    span:last-child {
      font-size: 1.3rem;

      span.unit {
        font-size: 0.9rem;
      }
    }
  }
`;

export default InfoList;
