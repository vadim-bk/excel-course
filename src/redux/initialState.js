import { storage } from "../core/utils";
import defaultStyles from "../constants";
import defaultTitle from "../constants";

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: "",
  currentStyles: defaultStyles,
};

const normalize = (state) => {
  return {
    ...state,
    currentStyles: defaultStyles,
    currentText: "",
  };
};

export const initialState = storage("excel-resize-state")
  ? normalize(storage("excel-resize-state"))
  : defaultState;
