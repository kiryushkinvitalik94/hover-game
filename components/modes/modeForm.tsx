import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewMode, requestUpdateMode } from "./store/action";

export default function ModeForm(props) {
  const { id, name, field, handlerOnCloseEditForm } = props;

  const [formData, setFormData] = useState({
    name: name || "",
    field: field || "",
  });

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = formData;

    if (id) {
      updateMode({ ...formData, id });
      handlerOnCloseEditForm();
    } else {
      createNewMode(data);
      e.target.reset();
      setFormData({ name: "", field: "" });
    }
  };

  const createNewMode = async (mode) => {
    dispatch(postNewMode(mode));
  };

  const updateMode = async (mode) => {
    dispatch(requestUpdateMode(mode));
  };

  const handlerOnChangeInput = (e) => {
    const $inputField = e.target;
    setFormData((formData) => {
      const updateFieldData = { [$inputField.name]: $inputField.value };
      return {
        ...formData,
        ...updateFieldData,
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {id ? "" : <label htmlFor="modeNameInput">name:</label>}
      <input
        type="text"
        defaultValue={formData.name}
        onChange={handlerOnChangeInput}
        id="modeNameInput"
        name="name"
      />
      {id ? "" : <label htmlFor="modeFieldInput">field:</label>}
      <input
        defaultValue={formData.field}
        type="number"
        onChange={handlerOnChangeInput}
        name="field"
        id="modeFieldInput"
      />
      <button>{id ? "update" : "save"}</button>
      {id ? (
        <button onClick={handlerOnCloseEditForm} type="button">
          cancel
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
