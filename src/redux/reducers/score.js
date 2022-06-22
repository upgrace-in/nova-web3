import { SCORE } from "../types/score";

const initialState = {
  score: null,
};

const scoreReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCORE:
      return { ...state, score: payload };
    default:
      return state;
  }
};

export default scoreReducer;
