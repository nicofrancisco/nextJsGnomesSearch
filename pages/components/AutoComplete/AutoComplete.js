import React, { Component } from "react";
import ReactDOM from "react-dom";
import Suggestions from "./Suggestions/Suggestions";
import ContainerInput  from "./ContainerInputStyles";
import InputSearch from "./InputSearchStyles";

class AutoComplete extends Component{
  static defaultProps = {
    maxSuggests: 5,
    maxWidth: "300px",
    includeSearchTerm: false,
    labelName: "",
    showLabel: false,
    placeholder: ""
  };

  state = {
    searchTerm: "",
    open: false,
    suggestedItems: [],
    currentOption: 0
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {

    document.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = event => {

    const thisComponent = ReactDOM.findDOMNode(this);

    if (!thisComponent || !thisComponent.contains(event.target)) {
      this.setState({
        open: false
      });
    }
  };

  updateLocalState = (state) => this.setState(state);
  updateParentState = (searchTerm) => {
    this.props.parentUpdateState(searchTerm);
  };

  render() {
    const { searchTerm, open } = this.state;
    return (
      <ContainerInput
        className="autocomplete"
        showLabel={this.props.showLabel}
        htmlFor={this.props.stateName}
        maxWidth={this.props.maxWidth}
      >
        {this.props.labelName.length > 0 && (
          <span> {this.props.labelName} </span>
        )}
        <InputSearch
          autoComplete="off"
          type="text"
          id={this.props.stateName}
          onChange={AutoComplete.handleTermChange(
            this.updateLocalState,
            this.updateParentState,
            this.props.updateCurrentPage,
            this.props.autoCompleteItems,
            this.props.maxSuggests,
            this.props.includeSearchTerm
          )}
          onFocus={AutoComplete.handleFocusInput(
            this.updateLocalState,
            searchTerm,
            this.updateParentState
          )}
          onKeyDown={AutoComplete.handleCloseAutoComplete(
            this.updateLocalState,
            this.state,
            this.updateParentState,
            this.props.updateCurrentPage
          )}
          value={searchTerm}
          placeholder={this.props.placeholder}
          open={open && searchTerm.length > 0 ? open : false}
        />
        <Suggestions
          open={open}
          maxWidth={this.props.maxWidth}
          updateLocalState={this.updateLocalState}
          updateParentState={this.updateParentState}
          {...this.state}
          {...this.props}
        />
      </ContainerInput>
    );
  }
}

AutoComplete.handleTermChange = (
  updateLocalState,
  updateParentState,
  updateCurrentPage,
  autoCompleteItems,
  maxSuggests,
  includeSearchTerm,
) => (event) => {

  const AutoCompleteList = autoCompleteItems
    .filter(autoCompleteItem => {

      if (includeSearchTerm) {
        return (
          autoCompleteItem
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) >= 0
        );
      }
      return (
        autoCompleteItem
          .toLowerCase()
          .search(event.target.value.toLowerCase()) === 0
      );
    })
    .splice(0, maxSuggests);

  updateLocalState({
    searchTerm: event.currentTarget.value,
    open: AutoCompleteList.length !== 0,
    suggestedItems: AutoCompleteList,
    currentOption: -1
  });

  updateParentState(event.currentTarget.value);

  updateCurrentPage(0);
};

AutoComplete.handleFocusInput = (
  updateLocalState,
  searchTerm,
  updateParentState,
) => (event) => {
  event.preventDefault();

  const open = searchTerm > 0;

  updateLocalState({
    open
  });
  updateParentState(searchTerm);
};

AutoComplete.handleCloseAutoComplete = (
  updateLocalState,
  state,
  updateParentState,
  updateCurrentPage,
) => (event,) => {

  if (event.which === 27) {
    updateLocalState({
      open: false,
      suggestedItems: []
    });
  } else if (event.keyCode === 13) {

    const processSearch =
      state.currentOption === -1
        ? state.searchTerm
        : state.suggestedItems[state.currentOption];
    updateLocalState({
      open: false,
      searchTerm: processSearch,
      suggestedItems: [],
      currentOption: -1
    });

    updateCurrentPage(0);
    updateParentState(processSearch);
  } else if (event.keyCode === 40) {

    updateLocalState(prevState => {
      const arrayItem = prevState.suggestedItems.length - 1;
      const maxOption =
        prevState.currentOption < arrayItem
          ? prevState.currentOption + 1
          : arrayItem;
      return {
        currentOption: maxOption
      };
    });
  } else if (event.keyCode === 38) {

    updateLocalState(prevState => {

      const minOption =
        prevState.currentOption < 1 ? -1 : prevState.currentOption - 1;
      return {
        currentOption: minOption
      };
    });
  } else if (event.keyCode === 9) {
    updateLocalState({
      currentOption: 0,
      suggestedItems: [],
      open: false
    });
  }
};

export default AutoComplete;
