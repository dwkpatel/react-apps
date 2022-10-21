import React from "react";
import NumberItem from "./NumberItem";

const NumbersList = ({ numbers }) => {
  const renderedList = numbers.map((number, index) => {
    return <NumberItem key={index} number={number} />;
  });
  return <div>{renderedList}</div>;
};

export default NumbersList;
