import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../../redux/actions/actions";
import AutoComplete from "./../../components/AutoComplete/AutoComplete";
import Select from "./../../components/Select/Select";
import OrderBy from "./../../components/OrderBy/OrderBy.js";
import FormSearch from "./FormSearchStyled";
import FormRow  from "./FormRowStyled";


const Filters = (props) => {

  console.log("Filters")
  console.log(props)
  const gnomeNames = props.gnomes.map(gnome => gnome.name);

  let getJobs = [];

  for (let i = 0; i < props.gnomes.length; i++) {
    getJobs = getJobs.concat(props.gnomes[i].professions);
  }

  const jobs = Array.from(new Set(getJobs));

  return (
    <FormSearch>
      <FormRow>
        <OrderBy>Most Friendly</OrderBy>
        <OrderBy>Less Friendly</OrderBy>
        <OrderBy>Youngest</OrderBy>
        <OrderBy>Oldest</OrderBy>
        <OrderBy>Lightest</OrderBy>
        <OrderBy>Heaviest</OrderBy>
        </FormRow>
        <FormRow>
        </FormRow>
        <div className={"filterWrappTitles"}>
          <div className={"profession"}>Search by Name</div>
          <div className={"profession"}>Search by Profession</div>
        </div>
        <FormRow>
        <div className={"filterWrapp"}>
        <AutoComplete
          stateName="searchTerm"
          updateCurrentPage={props.getCurrentPage}
          parentUpdateState={props.getSearchText}
          autoCompleteItems={gnomeNames}
          maxSuggests={5}
          maxWidth="100%"
          labelName="Search Gnome Name: "
          placeholder="Type Gnome Name: "
          includeSearchTerm
        />

          <Select
            items={jobs && jobs}
            defaultValue="All Professions"
            stateName="filteBy"
            maxWidth="100%"
            updateState={props.filterByJob}
            updateCurrentPage={props.getCurrentPage}
            state={props}
          />
        </div>
      </FormRow>
    </FormSearch>
  );
};

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

export default connect(mapStateToProps, actions)(Filters);
