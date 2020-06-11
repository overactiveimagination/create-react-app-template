const authReducer = (state, action) => {
  switch (action.type) {
    case "updateToken":
      return { ...state, auth: { token: action.payload } };
    default:
      return state;
  }
};

export default authReducer;
