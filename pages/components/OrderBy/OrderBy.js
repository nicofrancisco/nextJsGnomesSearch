import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./../../../src/actions/actions";
import OrderButton from "./OrderByStyles";


const OrderBy = (props) => (
  <OrderButton
    active={props.orderBy === props.children}
    {...props}
    onClick={OrderBy.handleClick(props.updateOrderBy, props.getCurrentPage)}
  >
    {props.children}
  </OrderButton>
);

OrderBy.defaultProps = {
  maxWidth: "100%",
  orderBy: ""
};

OrderBy.handleClick = (
  updateOrderBy,
  getCurrentPage,
) => (event) => {
  event.preventDefault();
  updateOrderBy(event.currentTarget.textContent);
  getCurrentPage(0);
};

function mapStateToProps(state) {
  return {
    orderBy: state.orderBy
  };
}

export default connect(mapStateToProps, actions)(OrderBy);
