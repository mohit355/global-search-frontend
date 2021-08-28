import React, { useEffect, useState } from "react";
import SearchResult from "../searchResult/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const SearchBar = (props) => {
  const [timer, setTimer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //
  const WAIT_INTERVAL = 600;

  const getCompanyData = (search) => {
    if (search.length > 0) {
      props.getListBySearch({ search: search });
    }
    setIsLoading(false);
  };

  const handleInputChange = (event) => {
    let search = event.target.value;
    clearTimeout(timer);
    props.setSearch(search);
    setIsLoading(true);
    let timers = setTimeout(() => getCompanyData(search), WAIT_INTERVAL);
    setTimer(timers);
  };

  console.log(isLoading);
  return (
    <div className="search">
      <div className="search_bar">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input
          type="text"
          name="searchBar"
          value={props.search}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search by company name.."
        />
      </div>

      <div className="search-dropdown">
        {props.search && props.search.length > 0 && (
          <SearchResult isLoading={isLoading}></SearchResult>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    handleError: state.search.handleError,
    search: state.search.search,
    companyData: state.search.companiesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListBySearch: (search) => dispatch(actions.listBySearch(search)),
    setSearch: (search) => dispatch(actions.setSearch(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
