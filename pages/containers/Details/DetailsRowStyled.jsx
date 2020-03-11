import * as React from "react";
import styled from "styled-components";

const DetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 630px) {
    justify-content: flex-start;
  }

  div.notFound {
    color: #ccc;
    font-size: 1.5rem;
    font-weight: lighter;
    padding: 140px 30px
    text-align: center;
    width: 100%;
  }
`;

export default DetailsRow;
