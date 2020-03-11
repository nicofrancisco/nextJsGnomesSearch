import React from "react";
import { connect } from "react-redux";
import DetailsInfo from "./../../components/DetailsInfo/DetailsInfo";
import Card from "./../../components/Card/Card";
import DetailsRow from "./DetailsRowStyled";
import DetailsWrapper from "./DetailsWrapperStyled";
import FriendsRow from "./FriendsRowStyled";


const Details = ({ gnomeURL, gnomes }) => {

  window.scroll(null, 0);
  const selectedGnome =
    gnomes &&
    gnomes.find(
      gnome => gnomeURL === `${gnome.id}-${gnome.name.split(" ").join("-")}`
    );

  const friends =
    selectedGnome && selectedGnome.friends.map(friend => friend.toLowerCase());

  const renderFriends =
    gnomes &&
    gnomes.filter(gnome =>
      friends.some(friend => gnome.name.toLowerCase() === friend)
    );

  return (
    <DetailsWrapper>
      <DetailsRow>
      </DetailsRow>
      <FriendsRow>
        {renderFriends.length > 0 ? (
          renderFriends.map(friend => (
            <div key={`${friend.id}`}>

            <Card
              key={`${friend.id}`}
              gnome={friend}
              to={`${friend.id}-${friend.name.split(" ").join("-")}`}
              hideFriendButton={true}
            />
            </div>
          ))
        ) : (
          <div className={"notFound"}>
            ...seems to have no friends
          </div>
        )}
      </FriendsRow>
    </DetailsWrapper>
  );
};

const mapStateToProps = state => ({
  gnomes: state.gnomes
});

export default connect(mapStateToProps)(Details);
