import React from "react";
import Link from 'next/link';
//import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
//import configure from "./../redux/store/configureStore";
import Main from './containers/Main.js'
import theme from "./../MainStyled";




const Index = () => (
  <div>

      <ThemeProvider theme={theme}>
        <Main></Main>
      </ThemeProvider>


  </div>
)

/*
const store = configure();

const Index = () => (
  <div>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main store={store}>
        </Main>
      </ThemeProvider>
    </Provider>

  </div>
)*/

export default Index
