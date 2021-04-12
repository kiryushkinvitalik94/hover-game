import {
  showedErrorInfoMessage,
  showedPendingInfoMessage,
  showedSuccessMessage,
  hidInfoMessage,
} from "./types";

export const showErrorInfoMessage = (text: string) => {
  return { type: showedErrorInfoMessage, text };
};

export const showPendingInfoMessage = () => {
  return { type: showedPendingInfoMessage };
};

export const showSuccessMessage = (text: string) => {
  return { type: showedSuccessMessage, text };
};
export const hideInfoMessage = () => {
  return { type: hidInfoMessage };
};
