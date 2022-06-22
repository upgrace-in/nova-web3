import { MESSAGE, THEME, TOGGLE_SMS_SIDEBAR, TOUR } from "../types/styles";

export const toggleTheme = (isLightMode) => async (dispatch) => {
  dispatch({ type: THEME, payload: isLightMode });
};

export const toggleMessage = (isVisible) => async (dispatch) => {
  dispatch({ type: MESSAGE, payload: isVisible });
};

export const toggleTour =
  ({ initialRender, isVisible }) =>
  async (dispatch) => {
    dispatch({ type: TOUR, payload: { initialRender, isVisible } });
  };

export const toggleSidebar = (isOpen) => async (dispatch) => {
  dispatch({ type: TOGGLE_SMS_SIDEBAR, payload: isOpen });
};
