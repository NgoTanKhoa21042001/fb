const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
      // hi
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
