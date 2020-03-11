import React from "react";
import { convertColors } from "./../../../utils";
import Details from "./DetailsInfoStyled";
import Avatar from "./AvatarStyles";
import Info from "./InfoStyles";
import InfoList from "./InfoListStyles";

const DetailsInfo = ({ gnome }) => (
  <Details hairColor={convertColors(gnome && gnome.hair_color)}>
    <div className="banner" />
    <Avatar src={gnome && gnome.thumbnail}>
      <img
        src={gnome && gnome.thumbnail}
        alt={`avatar ${gnome && gnome.name}`}
      />
    </Avatar>
    <header className="description">
      <h2>{gnome && gnome.name}</h2>
      <div>
        {gnome.professions.length > 0
          ? gnome.professions.join(" || ")
          : "No Profession"}
      </div>
    </header>
    <Info>
      <InfoList
        hairColor={gnome && convertColors(gnome.hair_color)}
      >
        <span>Age</span>
        <span>{gnome && gnome.age}</span>
      </InfoList>
      <InfoList
        hairColor={gnome && convertColors(gnome.hair_color)}
      >
        <span>Weight</span>
        <span>
          {gnome && Math.ceil(gnome.weight)} <span className="unit">KG</span>
        </span>
      </InfoList>
      <InfoList
        hairColor={gnome && convertColors(gnome.hair_color)}
      >
        <span>Height</span>
        <span>
          {gnome && Math.ceil(gnome.height)} <span className="unit">CM</span>
        </span>
      </InfoList>
      <InfoList
        hairColor={gnome && convertColors(gnome.hair_color)}
      >
        <span>Hair color</span>
        <span>{gnome && gnome.hair_color.toUpperCase()}</span>
      </InfoList>
    </Info>
    <div className="banner-footer" />
  </Details>
);

export default DetailsInfo;
