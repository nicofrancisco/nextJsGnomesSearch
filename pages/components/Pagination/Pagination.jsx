import React from "react";
import { PaginationWrapper, PaginationBtn } from "./PaginationStyled";
//import { itemsByPage, getCurrentPageGenderFormat } from "./../../utils";


const nextButtonValue = "Next";
const previousButtonValue = "Previous";

const Pagination = ({page, updateGlobalState, maxPages}) => (
  //const callGenderLocal = callGender;
  //const propsGenderLocal = propsGender;
  <PaginationWrapper>
    <PaginationBtn
      disableStyle={page <= 0}
      page={page}
      onClick={Pagination.onClick(page, updateGlobalState, maxPages)}
    >
      Previous
    </PaginationBtn>
    <span className="current-page">Page: {page + 1} / {maxPages + 1}</span>
    <PaginationBtn
      disableStyle={page >= maxPages}
      page={page}
      onClick={Pagination.onClick(page, updateGlobalState, maxPages)}
    >
      Next
    </PaginationBtn>
  </PaginationWrapper>
);

Pagination.onClick = (page, updateGlobalState, maxPages) => (
  event= event.currentTarget
) => {
  event.preventDefault();
  window.scroll(null, 0);

  const btnName = event.currentTarget.textContent.toLowerCase();

  /*let format;

  const setDirection = (direction) =>{

        let updatedPageNext = page + 1;
        let updatedPagePrevious = page  - 1;
        const paginationDirection = direction == "next" ? updatedPageNext : updatedPagePrevious;

        const gnomeNames = gnomes.map(gnome => gnome.name)
        const pageGnomes = gnomeNames.slice(
        itemsByPage * paginationDirection,
        itemsByPage + paginationDirection * itemsByPage
        )

        pageGnomes.map(gnome => (
          gnome => gnome.name
        ))

          const getFirstName = arr =>{
            var arrCroped = [];
              for(var a=0; a<arr.length; a++){

                var corte = arr[a].indexOf(" ");
                arrCroped[a] = arr[a].substr(0, corte);
              }
              function removeDuplicates(array) {
                return array.filter((a, b) => array.indexOf(a) === b)
              };
              return removeDuplicates(arrCroped);
          }

          const justRenderedPageNames = getFirstName(pageGnomes);

          const parseToService = arrToFormat =>{
            var arrayFormated = [];

              for(var b=0; b<arrToFormat.length; b++){
                arrayFormated[b] = "name[]="+arrToFormat[b];
              }

              return arrayFormated;

          }

          format = parseToService(justRenderedPageNames).toString().replace(/,/g, "&");

  }*/

  if (btnName === nextButtonValue.toLowerCase()) {
    const nextPage = page + 1;
    if (page !== maxPages) {
      updateGlobalState(nextPage);
      //setDirection("next")
      //callGender(format);
    }
  } else if (btnName === previousButtonValue.toLowerCase()) {
    const previousPage = page - 1;
    if (page > 0) {
      updateGlobalState(previousPage);
      //setDirection("previous")
      //callGender(format);
    }
  }
};

Pagination.defaultProps = {
  page: false
};

export default Pagination;
