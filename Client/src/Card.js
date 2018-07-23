import React from 'react';

const Card = (props) => {
  const cardStyle = {
    height: 145,
    width: 245,
    padding: 0,
    margin: 10,
    backgroundColor: "#483D8B",
    webkitFilet: "drop-shadow(0px 0px 5px #757575)",
    filter: "drop-shadow(0px 0px 5px #757575)"
  };

  return <div style={cardStyle}></div>;
};

export default Card;

