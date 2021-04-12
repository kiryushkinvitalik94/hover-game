import {
  showedErrorInfoMessage,
  showedPendingInfoMessage,
  showedSuccessMessage,
  hidInfoMessage,
} from "./types";

const initialState = {
  isShow: false,
  type: "",
  text: "",
};

export type InfoMessageStore = {
  isShow: boolean;
  type: string;
  text: string;
};

type action = {
  text: string;
  type: string;
};

export default function reducer(
  state: InfoMessageStore = initialState,
  action: action
) {
  switch (action.type) {
    case showedErrorInfoMessage:
      return {
        text: action.text,
        type: "error",
        isShow: true,
      };
      break;
    case showedPendingInfoMessage:
      return {
        text: action.text,
        type: "pending",
        isShow: true,
      };
      break;
    case showedSuccessMessage:
      return {
        text: action.text,
        type: "success",
        isShow: true,
      };
      break;
    case hidInfoMessage:
      return {
        isShow: false,
        type: "",
        text: "",
      };
      break;
    default:
      return state;
      break;
  }
}
