import * as React from "react";
import styled from "styled-components";
import Link from 'next/link';

export const DetailsWrapper = styled.main`
  border-radius: 5px;
  margin: 10px auto;
  max-width: 900px;
  max-heigth: 600px;
  padding: 0;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;

export const DetailsRow = styled.div`
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

export const FriendsRow = DetailsRow.extend`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
`;
