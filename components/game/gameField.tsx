import React, { useEffect, useState, MouseEvent } from "react";
import classes from "./gameField.module.css";
import _ from "lodash";
import InfoPAnelHoverSquares from "./infoPanelHoverSquares";

const GameField: React.FC<{ fieldCount: number }> = (props) => {
  const { fieldCount } = props;

  const [arrayRows, setArrayRows] = useState<any>(createArrayRow(+fieldCount));
  const [selectedBlocks, setselectedBlocks] = useState<[]>([]);

  useEffect(() => {
    setArrayRows(createArrayRow(+fieldCount));
    setselectedBlocks([]);
  }, [fieldCount]);

  function createArrayRow(fieldCount) {
    return Array.from(Array(fieldCount), (e, i) =>
      Array.from(Array(fieldCount), (x, i) => false)
    );
  }

  const updateSelectedSquares = (
    rowIndex: number,
    columnIndex: number,
    newBlockState: boolean
  ) => {
    setselectedBlocks((selectedBlocks): any => {
      const row = rowIndex;
      const column = columnIndex;
      if (newBlockState) {
        return [...selectedBlocks, { row, column }];
      } else {
        return selectedBlocks.filter(
          (item: { row: number; column: number }) =>
            !(item.row == row && item.column == column)
        );
      }
    });
  };

  const handlerOnBlockHover = (e) => {
    const columnIndex = e.target.dataset.column;
    const rowIndex = e.target.dataset.row;

    setArrayRows((arrayRows) => {
      const newBlockState = !arrayRows[rowIndex][columnIndex];
      const newArrayRows = _.cloneDeep(arrayRows);

      newArrayRows[rowIndex][columnIndex] = newBlockState;

      updateSelectedSquares(rowIndex, columnIndex, newBlockState);

      return newArrayRows;
    });
  };

  return (
    <>
      <div className={classes.gameFieldWrapper}>
        <div className={classes.fieldContainer}>
          {arrayRows.map((row, irow) => (
            <div key={irow + 1} className={classes.fieldRow}>
              {row.map((isActive, icolmn) => (
                <div
                  data-row={irow}
                  data-column={icolmn}
                  style={{
                    backgroundColor: isActive ? "blue" : "transparent",
                  }}
                  onMouseOver={handlerOnBlockHover}
                  key={icolmn + 1}
                  className={classes.fieldBlock}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <InfoPAnelHoverSquares selectedBlocks={selectedBlocks} />
      </div>
    </>
  );
};

export default GameField;
