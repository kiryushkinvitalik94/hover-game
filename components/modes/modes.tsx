import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { requestGetAllModes, requestRemoveMode } from "./store/action";
import ModeItem from "./modeItem";
import classes from "./modes.module.css";
import ModeForm from "./modeForm";
import { RootState } from "../../store/types";

const Modes: React.FC<{}> = (): JSX.Element => {
  const modes = useSelector((state: RootState) => state.modes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetAllModes());
  }, [dispatch]);

  const handlerOnRemoveMode = (id) => {
    dispatch(requestRemoveMode(id));
  };

  return (
    <>
      <div className={classes.modesWrapper}>
        <ModeForm />
        <ul className={classes.modesList}>
          {modes.data.map((mode: any) => (
            <ModeItem
              name={mode.name}
              key={mode._id}
              id={mode._id}
              field={mode.field}
              handlerOnRemoveMode={handlerOnRemoveMode}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Modes;
