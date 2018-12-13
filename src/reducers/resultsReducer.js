export const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case "saveResults":
      return action.data;
    default:
      return state;
  }
};
