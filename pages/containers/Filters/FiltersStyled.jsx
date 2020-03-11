import styled from "styled-components";
import { HomeWrapper } from "./../Home/HomeStyled";

export const FormSearch = styled.div`
  display: block;
  width: 100%;

  div.profession{
    height: 40px;
    padding-top: 20px;
    width: 50%;
    color: #a3a3a3;
  }

  div.filterWrapp{
    display: inline-flex;
    width: 96%;
  }

  div.filterWrappTitles{
    display: inline-flex;
    align: center;
    width: 100%;
    padding-left: 19px;
    padding-bottom: 4px;
  }
`;



export const FormRow = HomeWrapper.withComponent("div").extend`
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  width: 100%;


`;
