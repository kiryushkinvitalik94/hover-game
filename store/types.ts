import InfoMessageStore from "../components/common/infoMessage/store/reducer";

export type RootState = {
  modes: {
    loading: boolean;
    error: boolean;
    data: any;
    errorMessage: string;
  };
  infoPopUp: {
    isShow: boolean;
    type: string;
    text: string;
  };
};
