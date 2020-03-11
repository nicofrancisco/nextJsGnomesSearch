import React from "react";
import Link from 'next/link';
import HeaderComponent from "./HeaderStyled";

const Header = () => (
  <HeaderComponent>
    <div className="row">
      <h1>
         gnomo-matic-search
      </h1>
    </div>
  </HeaderComponent>
);

export default Header;
