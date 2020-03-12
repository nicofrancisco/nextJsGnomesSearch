import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Link from 'next/link';
import * as actions from "../../src/actions/actions";
import Loader from "../components/Loader/Loader.js";
import Home from './Home/Home.js'
import Header from "./Header/Header.js";
import Footer from "./../components/Footer/Footer.js";

const Main = (props) => {

  const[gnomes, setGnomes] = useState([]);

    useEffect(() => {

      document.addEventListener('keydown', handleFirstTab);
      document.addEventListener('click', handleClick);

      props.fetchGnomes().then(response =>{
        setGnomes(response)
      })
    }, []);

  //prevent ugly button glow on selected while not loosing tab nab
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
      {gnomes && gnomes.length === 0 ? (
        <Loader />
      ) : (
        <div>
        <Header />
        <Home data={props}/>
        <Footer />
        </div>
      )}
      </div>
    );
}

const mapStateToProps = state => ({
  gnomes: state.gnomes,
  gender: state.gender,
  searchTerm:state.searchTerm,
  filterBy: state.filterBy,
  orderBy: state.orderBy,
  currentPage: state.currentPage

});

const mapDispatchToProps = dispatch => {
  return {
    fetchGnomes: () => dispatch(actions.fetchGnomes())
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Main);
