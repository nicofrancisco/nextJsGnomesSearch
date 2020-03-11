import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/actions";
import { convertColors } from "./../../../utils";
import  GenderCard  from "./GenderCard/GenderCard";
import  GenderCardStyle from "./GenderStyled"
import Avatar from "./AvatarStyles";
import  Info from "./InfoStyles";
import  InfoList from "./InfoListStyles";

const Gender = (props) => {

  const { to,  gnome} = props;


  const cut = gnome ? gnome.name.indexOf(" ") : 0;
  const name = gnome ? gnome.name.substr(0, cut) : "";

  const[gender, setGender] = useState([]);

    useEffect(() => {

      props.fetchGender( "name[]="+ name ).then(response =>{
        console.log(response)
        setGender(response)
        console.log(gender)
      })
    }, []);

    /*useEffect(() => {
       if (gender.length > 0) {
            //renderGenderData(gender);
       }
    },[gender]);*/

  return(

  <GenderCardStyle to={to}>
    <div className="banner" />

    <Avatar src={gnome && gnome.thumbnail}>
      <img
        src={gnome && gnome.thumbnail}
        alt={`avatar ${gnome && gnome.name}`}
      />
    </Avatar>
    <header className="headerBox">
      <h2>{gnome && gnome.name}</h2>
      <div>
        {gnome.professions.length > 0
          ? gnome.professions.join(" • ")
          : "No Profession"}
      </div>
    </header>
    <GenderCard gender={gender}/>
    <Info>
      <InfoList hairColor={gnome && convertColors(gnome.hair_color)}>
        <span>Age</span>
        <span>{gnome && gnome.age}</span>
      </InfoList>
      <InfoList hairColor={gnome && convertColors(gnome.hair_color)}>
        <span>Weight</span>
        <span>
          {gnome && Math.ceil(gnome.weight)} <span className="unit">KG</span>
        </span>
      </InfoList>
      <InfoList hairColor={gnome && convertColors(gnome.hair_color)}>
        <span>Height</span>
        <span>
          {gnome && Math.ceil(gnome.height)} <span className="unit">CM</span>
        </span>
      </InfoList>
    </Info>
    <div className="banner-footer" />
  </GenderCardStyle>

)};

const mapStateToProps = state => ({
  gender: state.gender
});

export default connect(mapStateToProps, actions)(Gender);
