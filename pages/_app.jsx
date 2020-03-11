import App from "next/app";
import React from "react";
import Layout from "../src/components/Layout";

class MyApp extends App {
  render() {
    console.log("_app")
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
