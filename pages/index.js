import React from "react";
import Link from 'next/link';
import { ThemeProvider } from "styled-components";
import Main from './containers/Main.js'
import theme from "./../MainStyled";

const Index = () => (
  <div>
      <ThemeProvider theme={theme}>
        <Main></Main>
      </ThemeProvider>
  </div>
)

export default Index
