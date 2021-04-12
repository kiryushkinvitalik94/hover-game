import React, {
  useEffect,
  useState,
  MouseEvent,
  FormEvent,
  ChangeEvent,
} from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { requestGetAllModes } from "../modes/store/action";
import GameField from "./gameField";
import { RootState } from "../../store/types";

const Game: React.FC<{}> = (): JSX.Element => {
  const modes = useSelector((state: RootState) => state.modes);
  const dispatch = useDispatch();

  const [gameField, setGameField] = useState<number>(5);

  const [selectedField, setSelectedField] = useState<number>(5);

  useEffect(() => {
    dispatch(requestGetAllModes());
  }, [dispatch]);

  const handlerOnStartGameClick = (): void => {
    setGameField(selectedField);
  };

  const handlerOnSelectChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedField(+event.target.value);
  };

  return (
    <div>
      <select defaultValue={0} onChange={handlerOnSelectChange} name="" id="">
        <option value={0} disabled>
          Pick Mode
        </option>

        {modes.data.map((mode: any) => (
          <option value={mode.field} key={mode._id}>
            {mode.name}
          </option>
        ))}
      </select>
      <button onClick={handlerOnStartGameClick}>start</button>
      <GameField fieldCount={gameField} />
    </div>
  );
};

export default Game;
