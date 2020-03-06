const initialState = {
    userData: {},
    isFetching: false,
    isError: false
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
      case "fetchUser":
        return Object.assign({}, state, {
          isFetching: true,
          userData: {},
          isError: false
        });
      case "fetchedUser":
        return Object.assign({}, state, {
          userData: action.data,
          isFetching: false,
          isError: false
        });
      case "error":
        return Object.assign({}, state, {
          isError: true,
          isFetching: false
        });
      default:
        return state;
    }
  };
  
  export default asyncReducer;