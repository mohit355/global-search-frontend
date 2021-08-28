import React from "react";
import SearchResult from "../searchResult/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const SearchBar = (props) => {
  const getCompanyData = (search) => {
    if (search.length > 0) {
      props.getListBySearch({ search: search });
    }
  };

  const handleInputChange = (event) => {
    let search = event.target.value;
    props.setSearch(search);
    getCompanyData(search);
  };

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
          <SearchResult isLoading={props.isLoading}></SearchResult>
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
