import * as actionTypes from "./actionsTypes";
import queryString from "query-string";
import { API } from "../../config";
import axios from "axios";

// Get list of companies
export const getListBySearch = (response, queryLen, search) => {
  return {
    type: actionTypes.GET_COMPANY,
    data: response,
    queryLen: queryLen,
    search: search,
  };
};

// handle errors
export const errorHandler = (response) => {
  return {
    type: actionTypes.GET_COMPANY_FAILED,
    data: response,
  };
};

// set the search query value
export const setSearch = (search) => {
  return {
    type: actionTypes.SET_SEARCH,
    search: search,
    queryLen: search.length,
  };
};

// api call to fetch all companies matching with search query
export const listBySearch = (params) => {
  const queryLen = params.search.length;
  const search = params.search;
  const query = queryString.stringify(params);
  const data = [];
  return async (dispatch) => {
    if (queryLen > 0) {
      await axios
        .get(`${API}/listBySearch?${query}`)
        .then((res) => {
          dispatch(getListBySearch(res.data, queryLen, search));
        })
        .catch((err) => {
          dispatch(errorHandler(err));
        });
    } else {
      await dispatch(getListBySearch(data, queryLen, search));
    }
  };
};

// handle click of resultant companies
export const handleResultClick = (companyDetails) => {
  return {
    type: actionTypes.HANDLE_SEARCH_RESULT_CLICK,
    companyDetails: companyDetails,
  };
};
