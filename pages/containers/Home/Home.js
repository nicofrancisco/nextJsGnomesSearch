import React from 'react';
import { Helmet } from "react-helmet";
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import Filters from "./../Filters/Filters";
import Card from "./../../components/Card/Card";
import * as actions from "./../../redux/actions/actions";
import { HomeRow, HomeWrapper } from "./HomeStyled";
import Pagination from "./../../components/Pagination/Pagination";
import { filterGnomesBy, itemsByPage} from "./../../utils";


const Home = (props) => {

  const { searchTerm, gnomes, orderByFilter, currentPage} = props;

  /*useEffect(() => {
    props.fetchGender(format).then(response =>{ JSON.stringify(response); console.log(response)})

  }, [])
  const format = getCurrentPageGenderFormat(gnomes, props.getCurrentPage(currentPage).payload)
  const names = getFirstNames(gnomes, props.getCurrentPage(currentPage).payload);*/


  const searchFilters = filterGnomesBy(gnomes, orderByFilter)
    .filter(gnome => {

      const isJob = gnome.professions.find(
        profession => profession === props.filterBy
      );

      const hasProfession = gnome.professions.some(
        profession => profession === isJob
      );

      return props.filterBy === "All" ? gnome : hasProfession;
    })
    .filter(gnome => {

      const search =
        gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
      return search;
    });

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
        <Filters />
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
    filterBy: state.filterBy,
    orderByFilter: state.orderBy,
    currentPage: state.currentPage
  };
}

export default connect(mapStateToProps, actions)(Home);
