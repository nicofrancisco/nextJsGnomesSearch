import React from "react";
import { withRedux } from "../../lib/with-redux-store";

function Layout({ children }) {
  return <div>hola{children}</div>;
}

export default withRedux(Layout);
