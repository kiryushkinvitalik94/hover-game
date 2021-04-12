import React, { useState } from "react";
import RemoveIcon from "../common/icons/removeIcon";
import EditIcon from "../common/icons/editIcon";
import ModeForm from "./modeForm";
import classes from "./modeItem.module.css";

export default function modeItem(props) {
  const { name, field, id, handlerOnRemoveMode, handlerOnEditMode } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const handlerOnRemoveClick = () => {
    handlerOnRemoveMode(id);
  };

  const handlerOnEditClick = () => {
    setIsEditMode(true);
  };

  const handlerOnCloseEditForm = () => {
    setIsEditMode(false);
  };

  return (
    <li className={classes.modeContainer}>
      {isEditMode ? (
        <ModeForm
          name={name}
          id={id}
          field={field}
          handlerOnCloseEditForm={handlerOnCloseEditForm}
        />
      ) : (
        <>
          <div className={classes.modeContent}>
            <span>{name} </span>
            <span>{field}</span>
          </div>

          <div className={classes.modeBtnPanel}>
            <button onClick={handlerOnRemoveClick}>
              <RemoveIcon />
            </button>
            <button onClick={handlerOnEditClick}>
              <EditIcon />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
