import * as actionTypes from "../actions/actionsTypes";

// storing initial states required
const initialState = {
  search: "",
  companiesData: [],
  handleError: false,
  queryLen: 0,
  company: [],
};

// this method will set the search value/ search query
const setSearch = (state, action) => {
  return { ...state, search: action.search, queryLen: 0 };
};

// this function will update the state with new list of compaines according to search value
const getListBySearch = (state, action) => {
  const newState = {
    ...state,
    companiesData: action.data,
    queryLen: action.queryLen,
    search: action.search,
  };
  return newState;
};

// manage error if occurs
const handleError = (state, action) => {
  const stateCopy = { ...state };
  const updatedState = { handleError: true, queryLen: 0, search: "" };
  return { stateCopy, updatedState };
};

// used to set a single clicked company to a state- company
const handleSearchResultClick = (state, action) => {
  const newState = {
    ...state,
    queryLen: 0,
    search: "",
    company: [action.companyDetails],
  };
  return newState;
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // update search
    case actionTypes.SET_SEARCH:
      return setSearch(state, action);

    //   get company list
    case actionTypes.GET_COMPANY:
      return getListBySearch(state, action);

    // handle searchBar error
    case actionTypes.GET_COMPANY_FAILED:
      return handleError(state, action);

    // handle search result click
    case actionTypes.HANDLE_SEARCH_RESULT_CLICK:
      return handleSearchResultClick(state, action);

    // return state in default case
    default:
      return state;
  }
};

export default reducer;
