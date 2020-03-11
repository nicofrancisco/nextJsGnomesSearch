import React from "react";
import Popup from "reactjs-popup";
import Details from "./../../containers/Details/Details.js"
import Gender from "./../../components/Gender/Gender.js"
import { ModalStyle } from "./ModalStyles";
export default ({label, gnomes, to}) => {

  return(
  <ModalStyle>
  <Popup className="popup" trigger={<button className="button"> {label} </button>} modal >

    {close => {
      if (label == "View Friends"){
        return(
        <div  disabled className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> {to.replace(/-/g, ' ').replace(/[0-9]/g, '')} Friends </div>
          <div className="contentFriends">
            <Details gnomeURL={to}  gnomes={gnomes} />
          </div>
          <div className="actions">
          </div>
        </div>
      )}else{
        return(
          <div  disabled className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">Gender Guess</div>
            <div className="content">
                <Gender to={to} gnome={gnomes}/>
            </div>
            <div className="actions">
              <Popup
                trigger={<button className="check"> Click here to check our Data Source :) </button>}
                position="top center"
                closeOnDocumentClick
              >
                <span className="toolTip">
                  Our calculations are based on genderize.io plus our magic algorythm! XD
                </span>
              </Popup>

            </div>
          </div>
      )
      }
    }
  }
  </Popup>
  </ModalStyle>
)};
