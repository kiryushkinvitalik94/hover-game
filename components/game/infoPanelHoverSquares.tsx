import React from "react";
import classes from "./infoPanelHoverSquares.module.css";

const infoPanelHoverSquares: React.FC<{ selectedBlocks: any }> = (
  props
): JSX.Element => {
  const { selectedBlocks } = props;

  return (
    <div className={classes.hoverSquaresInf}>
      <h2>Hover Squares</h2>
      <ul>
        {selectedBlocks.map((item, i) => {
          return (
            <li key={i + 1}>
              <span>row {+item.row + 1}</span>
              <span>column {+item.column + 1}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default infoPanelHoverSquares;
