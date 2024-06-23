import React from "react";

const RandomQutoes = () => {
  const qoutes = [
    "aples",
    "Banana",
    "chickoo",
    "dance",
    "eillie",
    "fig",
    "gol gapaap",
    "hrose",
  ];

  const indexs = Math.floor(Math.random(qoutes.length) * 10);
  const qoute = qoutes[indexs];
  return <div>{qoute}</div>;
};

export default RandomQutoes;
