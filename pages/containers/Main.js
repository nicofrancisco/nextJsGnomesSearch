import React, { Component } from "react";
import { connect } from "react-redux";
import Link from 'next/link';
import * as actions from "../../redux/actions/actions";
import Loader from "../components/Loader/Loader.js";
import Home from './Home/Home.js'
import Header from "./Header/Header.js";
import Footer from "./../components/Footer/Footer.js";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //prevent ugly glow on button selected
    document.addEventListener('keydown', this.handleFirstTab);
    document.addEventListener('click', this.handleClick);

    this.props.fetchGnomes();
  }

  handleFirstTab = (e) => {
      if (e.keyCode === 9) {
          document.body.classList.add('user-is-tabbing');
          document.removeEventListener('keydown', this.handleFirstTab);
      }
  }
  handleClick= (e) => {
          document.body.classList.remove('user-is-tabbing');
          document.addEventListener('keydown', this.handleFirstTab);
  }

  render() {
    return (
      <div>
      {this.props.gnomes.length === 0 ? (
        <Loader />
      ) : (
        <div>

        <Header />
        <Home data={this.props} store={this.props.store}/>
        <Footer />
        </div>
      )}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

export default connect(mapStateToProps, actions)(Main);
