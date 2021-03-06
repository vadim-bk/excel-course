import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
  CHANGE_TITLE,
  UPDATE_DATE,
} from "./types";

const value = (state, field, action) => {
  const prevState = state[field] || {};
  prevState[action.data.id] = action.data.value;
  return prevState;
};

export const rootReducer = (state, action) => {
  let field;
  let val;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === "col" ? "colState" : "rowState";
      return { ...state, [field]: value(state, field, action) };

    case CHANGE_TEXT:
      field = "dataState";
      return {
        ...state,
        currentText: action.data.value,
        [field]: value(state, field, action),
      };

    case CHANGE_STYLES:
      return { ...state, currentStyles: action.data };

    case APPLY_STYLE:
      field = "styleState";
      val = state[field] || {};
      action.data.ids.forEach((id) => {
        val[id] = { ...val[id], ...action.data.value };
      });
      return {
        ...state,
        [field]: val,
        currentStyles: { ...state.currentStyles, ...action.data.value },
      };

    case CHANGE_TITLE:
      return { ...state, title: action.data };

    case UPDATE_DATE:
      return { ...state, openedDate: new Date().toJSON() };

    default:
      return state;
  }
};
