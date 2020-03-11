import React from "react";
import Suggestion from "./SuggestionsStyled";
import ItemSuggestions from "./ItemSuggestionsStyles";


const Suggestions = ({
  searchTerm,
  maxWidth,
  updateLocalState,
  updateParentState,
  open,
  suggestedItems,
  currentOption
}) => (
  <ItemSuggestions
    open={open && searchTerm.length > 0 ? open : false}
    maxWidth={maxWidth}
  >
    <ul className="suggestions-list">
      {suggestedItems.map(autoCompleteItem => (
        <Suggestion
          key={autoCompleteItem}
          onClick={Suggestions.selectCompletion(
            updateLocalState,
            updateParentState
          )}
          onMouseOver={Suggestions.mouseOverSuggestion(
            updateLocalState,
            suggestedItems.indexOf(autoCompleteItem)
          )}
          onMouseLeave={Suggestions.mouseLeaveSuggestion(updateLocalState)}
          onFocus={Suggestions.hoverFocus}
          active={suggestedItems[currentOption] === autoCompleteItem}
          role="presentation"
        >
          {autoCompleteItem}
        </Suggestion>
      ))}
    </ul>
  </ItemSuggestions>
);

Suggestions.selectCompletion = (
  updateLocalState,
  updateParentState,
) => (event) => {
  event.preventDefault();

  updateLocalState({
    searchTerm: event.currentTarget.textContent,
    open: false,
    suggestedItems: [],
    currentOption: -1
  });
  updateParentState(event.target.textContent);
};

Suggestions.mouseOverSuggestion = (
  updateLocalState,
  indexNumber,
) => () => {

  updateLocalState({
    currentOption: indexNumber
  });
};


Suggestions.mouseLeaveSuggestion = (updateLocalState) => () => {
  updateLocalState({
    currentOption: -1
  });
};

Suggestions.hoverFocus = (event) => {
  event.focus();
};

export default Suggestions;
