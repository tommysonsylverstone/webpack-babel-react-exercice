import React from "react";

const Pgcd = ({ x, y }) => {
  const pgcd = (a, b) => {
    if (b) {
      return pgcd(b, a % b);
    } else {
      return Math.abs(a);
    }
  };
  return (
    <div>
      <ul>
        <li>A: {x}</li>
        <li>B: {y}</li>
        <li>C: {x && y && pgcd(x, y)}</li>
      </ul>
    </div>
  );
};

export default Pgcd;
