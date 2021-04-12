import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./infoMessage.module.css";
import { hideInfoMessage } from "./store/action";
import { RootState } from "../../../store/types";
import { InfoMessageStore } from "./store/reducer";

const InfoMessage: React.FC<{}> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const infoPopUp = useSelector((state: RootState) => state.infoPopUp);

  useEffect(() => {
    if (infoPopUp.isShow) {
      setTimeout(() => dispatch(hideInfoMessage()), 3000);
    }
  }, [infoPopUp]);

  const text = infoPopUp.text;

  if (infoPopUp.type === "pending") {
    return (
      <div className={classes.infoMessageContainer}>
        <div className={classes.pending}>
          <div id="fountainTextG">
            <div id="fountainTextG_1" className="fountainTextG">
              L
            </div>
            <div id="fountainTextG_2" className="fountainTextG">
              o
            </div>
            <div id="fountainTextG_3" className="fountainTextG">
              a
            </div>
            <div id="fountainTextG_4" className="fountainTextG">
              d
            </div>
            <div id="fountainTextG_5" className="fountainTextG">
              i
            </div>
            <div id="fountainTextG_6" className="fountainTextG">
              n
            </div>
            <div id="fountainTextG_7" className="fountainTextG">
              g
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (infoPopUp.type === "success") {
    return (
      <div className={classes.infoMessageContainer}>
        <div className={classes.success}>
          <div className={classes.textCantainer}>{text}</div>
        </div>
      </div>
    );
  }

  if (infoPopUp.type === "error") {
    return (
      <div className={classes.infoMessageContainer}>
        <div className={classes.error}>
          <div className={classes.textCantainer}>{text}</div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default InfoMessage;
