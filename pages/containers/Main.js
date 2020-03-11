import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Link from 'next/link';
//import * as actions from "../redux/actions/actions";
import * as actions from "../../src/actions/actions";
import Loader from "../components/Loader/Loader.js";
import Home from './Home/Home.js'
import Header from "./Header/Header.js";
import Footer from "./../components/Footer/Footer.js";

const Main = (props) => {

  //const { to,  gnome} = props;
  //const cut = gnome.name.indexOf(" ");
  //const name = gnome.name.substr(0, cut);

  const[gnomes, setGnomes] = useState([]);

    useEffect(() => {

      document.addEventListener('keydown', handleFirstTab);
      document.addEventListener('click', handleClick);

      props.fetchGnomes().then(response =>{
        console.log(response)
        setGnomes(response)
        console.log(gnomes)
      })
    }, []);

    useEffect(() => {
       if (gnomes.length > 0) {
            //renderGenderData(gender);
            //setGnomes(gnomes)
            console.log(gnomes)
       }
    },[gnomes]);



  /*gnomes;
  fetchGnomes;

  constructor({gnomes, currentPage, gender, fetchGnomes, searchTerm, filterBy, OrderBy}){
    //super({gnomes, currentPage, gender, fetchGnomes, searchTerm, filterBy, OrderBy});
    //this.state = {};

    this.gnomes = this.props.gnomes;
    this.fetchGnomes = this.props.fetchGnomes;;
  }*/

  /*componentDidMount() {
    //prevent ugly glow on button selected
    document.addEventListener('keydown', this.handleFirstTab);
    document.addEventListener('click', this.handleClick);

    this.fetchGnomes();
    console.log(this.gnomes)
      console.log(this.props)
  }*/

  const handleFirstTab = (e) => {
      if (e.keyCode === 9) {
          document.body.classList.add('user-is-tabbing');
          document.removeEventListener('keydown', handleFirstTab);
      }
  }
  const handleClick= (e) => {
          document.body.classList.remove('user-is-tabbing');
          document.addEventListener('keydown', handleFirstTab);
  }


    return (
      <div>
      {gnomes.length === 0 ? (
        <Loader />
      ) : (
        <div>

        <Header />

        <Home data={props}/>{/*store={this.props.store}*/}
        <Footer />

        </div>
      )}
      </div>

    );
}

/*function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}*/

const mapStateToProps = state => ({
  gnomes: state.gnomes,
  gender: state.gender,
  searchTerm:state.searchTerm,
  filterBy: state.filterBy,
  orderBy: state.orderBy,
  currentPage: state.currentPage

});

/*const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};*/

const mapDispatchToProps = dispatch => {
  return {
    fetchGnomes: () => dispatch(actions.fetchGnomes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

//export default connect(mapStateToProps, actions)(Main);
