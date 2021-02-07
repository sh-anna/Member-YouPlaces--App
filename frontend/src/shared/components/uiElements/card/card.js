import React from 'react';
// import { Link } from "react-router-dom";
// import Avatar from "../avatar/avatar";
// import "../../../../user/components/userItem/userItem.css";
import './card.css';


const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
