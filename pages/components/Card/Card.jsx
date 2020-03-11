import React from "react";
import { convertColors } from "./../../../utils";
import Modal from "./../Modal/Modal.js";
import { GnomeCard, Avatar, GnomeInfo, GnomeInfoList } from "./CardStyled";


const Card = ({ gnome, to, hideFriendButton=false }) => (

  <GnomeCard to={to} hairColor={convertColors(gnome && gnome.hair_color)}>
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
          ? gnome.professions.join(" • ")
          : "No Profession"}
      </div>

    </header>
    {!hideFriendButton ? <Modal label="View Friends" gnomes={gnome} to={to}/> : null}
    {!hideFriendButton ? <Modal label="Gender Guess?" gnomes={gnome} to={to}/> : null}
    <GnomeInfo>
      <GnomeInfoList hairColor={gnome && convertColors(gnome.hair_color)}>
        <span>Age</span>
        <span>{gnome && gnome.age}</span>
      </GnomeInfoList>
      <GnomeInfoList hairColor={gnome && convertColors(gnome.hair_color)}>
        <span>Weight</span>
        <span>
          {gnome && Math.ceil(gnome.weight)} <span className="unit">KG</span>
        </span>
      </GnomeInfoList>
      <GnomeInfoList hairColor={gnome && convertColors(gnome.hair_color)}>
        <span>Height</span>
        <span>
          {gnome && Math.ceil(gnome.height)} <span className="unit">CM</span>
        </span>
      </GnomeInfoList>
    </GnomeInfo>
    <div className="banner-footer" />
  </GnomeCard>

);

export default Card;
