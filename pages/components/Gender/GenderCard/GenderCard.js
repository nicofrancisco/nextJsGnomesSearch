import React from "react";
import GenderResult from "./GenderCardStyles";

const GenderCard = (props) => {

  let randomNumberAprox = Math.floor(Math.random() * (95 - 80 + 1)) + 80;

  const findOutIfFemale=(name)=>{

    let isFemale;;

    const char = name.substr(-1);
    isFemale = isVowel(char)
        function isVowel(x) {
            let result;
            result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
            return result;
        }
    return isFemale;
  }

  if(props.gender && props.gender.length > 0){
      if(props.gender && props.gender[0].gender){
      return(
        <GenderResult>
          <div className="column">
            <h1>
              {props.gender[0].name} it's a {props.gender[0].gender == "male" ? "Boy" : "Girl"}!
            </h1>
            <h3>({props.gender[0].probability * 100}% chances according to our report)</h3>
          </div>
        </GenderResult>
    )
  }else if(!props.gender[0].gender && findOutIfFemale(props.gender[0].name) == true){
      return(
        <GenderResult>
          <div className="column">
            <h1>
              {props.gender[0].name} it's a Girl!
            </h1>
            <h3>({randomNumberAprox}% chances according to our report)</h3>
          </div>
        </GenderResult>
    )
  }else{
    return(
      <GenderResult>
        <div className="column">
          <h1>
            {props.gender[0].name} could be an hermafrodith gnome with {randomNumberAprox}% of chances.
          </h1>

        </div>
      </GenderResult>
  )
  }
}else{
      return(
      <GenderResult>
        <div className="row">
          <h1>
            Loading Gender...
          </h1>
        </div>
      </GenderResult>
    )
 }
};

export default GenderCard;
