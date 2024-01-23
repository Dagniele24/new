const initialState = {
    query: '',
    jobs: [],
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          query: action.payload,
        };
      case 'SET_JOB_RESULTS':
        return {
          ...state,
          jobs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  