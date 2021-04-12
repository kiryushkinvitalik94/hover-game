import {
  gotAllModes,
  gotAllModesSuccses,
  gotAllModesFailed,
  createdMode,
  createdModeSuccess,
  createdModeFailed,
  removedMode,
  removedModeSuccess,
  removedModeFailed,
  updatedMode,
  updatedModeSuccess,
  updatedModeFailed,
} from "./types";

import {
  showPendingInfoMessage,
  showSuccessMessage,
  showErrorInfoMessage,
} from "../../common/infoMessage/store/action";

// actions create new mode
export const getAllModes = () => {
  return { type: gotAllModes };
};

export const getAllModesSuccess = (data) => {
  return { type: gotAllModesSuccses, data };
};

export const getAllModesFailed = (error) => {
  return { type: gotAllModesFailed, error };
};

export const requestGetAllModes = () => {
  return async (dispatch) => {
    dispatch(getAllModes());
    try {
      const response = await fetch("/api/modes");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${errorText}`);
      }
      const result = await response.json();
      dispatch(getAllModesSuccess(result));
    } catch (error) {
      dispatch(getAllModesFailed(error.message));
    }
  };
};

// actions create new mode
export const createMode = () => {
  return { type: createdMode };
};

export const createModeSuccess = (data) => {
  return { type: createdModeSuccess, data };
};

export const createModeFailed = (error) => {
  return { type: createdModeFailed, error };
};

export const postNewMode = (mode) => {
  return async (dispatch) => {
    dispatch(createMode());
    dispatch(showPendingInfoMessage());
    try {
      const response = await fetch("/api/modes", {
        method: "POST",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(mode),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${errorText}`);
      }
      const result = await response.json();
      dispatch(createModeSuccess(result));
      dispatch(showSuccessMessage("Congratulations! You add new mode"));
      dispatch(requestGetAllModes());
    } catch (error) {
      dispatch(createModeFailed(error.message));
      dispatch(showErrorInfoMessage(error.message));
    }
  };
};

//action remove mode

export const removeMode = () => {
  return { type: removedMode };
};

export const removeModeSuccess = () => {
  return { type: removedModeSuccess };
};

export const removeModeFailed = (error) => {
  return { type: removedModeFailed, error };
};

export const requestRemoveMode = (id) => {
  return async (dispatch) => {
    dispatch(removeMode());
    dispatch(showPendingInfoMessage());
    try {
      const response = await fetch(`/api/modes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${errorText}`);
      }
      const result = await response.json();
      dispatch(removeModeSuccess());
      dispatch(showSuccessMessage("Success! remove mode"));
      dispatch(requestGetAllModes());
    } catch (error) {
      dispatch(removeModeFailed(error.message));
      dispatch(showErrorInfoMessage(error.message));
    }
  };
};

export const updateMode = () => {
  return { type: updatedMode };
};

export const updateModeSuccess = () => {
  return { type: updatedModeSuccess };
};

export const updateModeFailed = (error) => {
  return { type: updatedModeFailed, error };
};

export const requestUpdateMode = (mode) => {
  return async (dispatch) => {
    dispatch(updateMode());
    dispatch(showPendingInfoMessage());
    try {
      const response = await fetch(`/api/modes/${mode.id}`, {
        method: "PUT",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(mode),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${errorText}`);
      }
      const result = await response.json();
      dispatch(updateModeSuccess());
      dispatch(showSuccessMessage("Congratulations! You update mode"));
      dispatch(requestGetAllModes());
    } catch (error) {
      dispatch(updateModeFailed(error.message));
      dispatch(showErrorInfoMessage(error.message));
    }
  };
};
