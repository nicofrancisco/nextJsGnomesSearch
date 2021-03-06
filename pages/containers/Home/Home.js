import React from 'react';
import { Helmet } from "react-helmet";
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import Filters from "./../Filters/Filters";
import Card from "./../../components/Card/Card";
import * as actions from "./../../../src/actions/actions";
import Pagination from "./../../components/Pagination/Pagination";
import { filterGnomesBy, itemsByPage} from "./../../../utils";
import HomeRow from "./HomeRowStyled";
import HomeWrapper from "./HomeWrapperStyled";


const Home = (props) => {

  let { searchTerm, gnomes, orderByFilter, currentPage, filterBy, filterByJob} = props;

  if(filterBy == "") filterBy = "All";

  let searchFilters = filterGnomesBy(gnomes, orderByFilter)
    .filter(gnome => {

      const isJob = gnome.professions.find(
        profession => profession === filterBy
      );

      const hasProfession = gnome.professions.some(
        profession => profession === isJob
      );

      return filterBy === "All" ? gnome : hasProfession;
    })
    .filter(gnome => {

      const search =
        gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
      return search;
    });
    if(filterBy == "All Professions") searchFilters = gnomes;

  return (
    <HomeWrapper>
      <Helmet>
        <title>Nicolas Bergues</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta
          name="description"
          content="Assesment App"
        />
      </Helmet>
      <HomeRow>
        <Filters data={props} />
      </HomeRow>
      <Pagination
        page={currentPage}
        updateGlobalState={props.getCurrentPage}
        maxPages={Math.floor(searchFilters.length / itemsByPage)}
      />
      <HomeRow>
      <TransitionGroup className="cards" in={true}>
        {searchFilters.length > 0 ? (
          searchFilters
            .slice(
              itemsByPage * currentPage,
              itemsByPage + currentPage * itemsByPage
            )
            .map(gnome => (
              <CSSTransition key={gnome.id} timeout={500} classNames="item">
                <Card
                  key={gnome.id}
                  gnome={gnome && gnome}
                  to={`${gnome.id}-${gnome.name.split(" ").join("-")}`}
                />
              </CSSTransition>
            ))
        ) : (<CSSTransition timeout={500} classNames="item">
              <div className="notFound">{searchFilters.length} no gnomes founded for current search</div>
             </CSSTransition>
          )
        }
        </TransitionGroup>
      </HomeRow>
      <Pagination
        page={currentPage}
        updateGlobalState={props.getCurrentPage}
        maxPages={Math.floor(searchFilters.length / itemsByPage)}
      />
    </HomeWrapper>
  );
};


function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    gnomes: state.gnomes,
    gender: state.gender,
    filterBy: state.filterBy,
    orderByFilter: state.orderBy,
    currentPage: state.currentPage
  };
}

export default connect(mapStateToProps, actions)(Home);
