import { MESSAGE, THEME, TOGGLE_SMS_SIDEBAR, TOUR } from "../types/styles";

const initialState = {
  lightMode: false,
  message: false,
  tour: {
    initialRender: true,
    isVisible: false,
  },
  sidebarActive: false,
};

const stylesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case THEME:
      return { ...state, lightMode: payload };
    case MESSAGE:
      return { ...state, message: payload };
    case TOUR:
      return { ...state, tour: payload };
    case TOGGLE_SMS_SIDEBAR:
      return { ...state, sidebarActive: payload };
    default:
      return state;
  }
};

export default stylesReducer;
