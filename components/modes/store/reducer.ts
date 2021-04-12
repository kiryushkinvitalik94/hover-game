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

const initialState = {
  loading: false,
  error: false,
  data: [],
  errorMessage: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case gotAllModes:
      return {
        ...state,
        loading: true,
      };
      break;
    case gotAllModesSuccses:
      return {
        data: action.data,
        error: false,
        loading: false,
      };
      break;
    case gotAllModesFailed:
      return {
        data: [],
        errorMessage: action.error,
        error: true,
        loading: false,
      };
      break;

    case createdMode:
      return {
        ...state,
        loading: true,
      };
      break;
    case createdModeSuccess:
      return {
        ...state,
        error: false,
        loading: false,
      };
      break;
    case createdModeFailed:
      return {
        ...state,
        errorMessage: action.error,
        error: true,
        loading: false,
      };
      break;
    case removedMode:
      return {
        ...state,
        loading: true,
      };
      break;
    case removedModeSuccess:
      return {
        ...state,
        error: false,
        loading: false,
      };
      break;
    case removedModeFailed:
      return {
        ...state,
        errorMessage: action.error,
        error: true,
        loading: false,
      };
      break;
    case updatedMode:
      return {
        ...state,
        loading: true,
      };
      break;
    case updatedModeSuccess:
      return {
        ...state,
        error: false,
        loading: false,
      };
      break;
    case updatedModeFailed:
      return {
        ...state,
        errorMessage: action.error,
        error: true,
        loading: false,
      };
      break;

    default:
      return state;
      break;
  }
}
