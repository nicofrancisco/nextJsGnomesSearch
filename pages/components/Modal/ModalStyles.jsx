import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`

    button {
      margin-left: auto;
      margin-right: auto;
      top: -12px;
      padding-bottom: 5px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      background: transparent;
      /*font-weight: lighter;
      font-size: 0.8rem;
      color: #146e7d;*/
      font-size: 0.7rem;
      color: #4a98a5;
      font-weight: 600;
    }
    .gender {
      margin-left: auto;
      margin-right: auto;
      top: -20px;
      padding-bottom: 5px;
      padding-top: 15px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      background: transparent;
      font-weight: normal;
      font-size: 1.3rem;
      color: #7ca7a7;
    }

    @media screen and (min-width: 630px) {
      left: 40%;
    }

    div.popup {
      background: #ccc !important;
    }

    div.modal {
      font-size: 12px;
    }
    div.header {
      width: 100%;
      font-size: 18px;
      text-align: center;
      padding: 5px;
    }
    div.contentFriends {
      width: 100%;
      height: 50%;
      margin-top: -12px;
    }
    div.content {
      width: 100%;
      height: 50%;
      margin-top: 12px;
    }
    div.actions {
      width: 100%;
      padding: 10px 5px;
      margin: auto;
      text-align: center;
    }
    .check{
     font-weight: bold;
     padding-top: 20px;
     font-family: monospace;
     font-size: 1.2em;
    }
    .toolTip{
      font-size: 1.9em;
    }
    a.close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: 5px;
      top: 5px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
    }`;

export default ModalStyle;
