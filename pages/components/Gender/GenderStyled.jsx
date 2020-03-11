
import React from "react";
import styled from "styled-components";
import Link from 'next/link';


const CardLink = ({ className, children, to }) => (
  <div>
    <div>
        {children}
    </div>
    <div>
    <Link href={"href=https://api.genderize.io/?name="+to} to={to} className={className}>
      <p>Consultar gnomo</p>
    </Link>
    </div>
  </div>

);

export const GnomeCard = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px 15px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }

  div.banner {
    position: absolute;
    top: 0;
    width: 100%;

  }

  header.headerBox{
    margin: 10px 0px;
    position: relative;
    height: 30px;
    margin-top: 35px;
    padding: 0 10px;
    text-align: center;
    font-size: 0.8rem;

    h2 {
      margin: 0 0 10px;
    }
    & > div {
      font-size: 0.8rem;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 8px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 630px) {
    max-width: 570px;
    margin: auto;
  }
`;

export const Avatar = styled.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover
  box-sizing: border-box;
  margin: auto 0;
  padding: 5px;
  height: 100px;
  position: relative;
  margin-top: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }
`;

export const GnomeInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 10px 12px;
`;

export const GnomeInfoList = styled.li`
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
