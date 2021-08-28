import React from "react";
import "./SearchResult.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const SearchResult = (props) => {
  const handleOnClick = (companyDetails) => {
    props.handleResultClick(companyDetails);
  };

  return (
    <div className="searchResult">
      <ul>
        {props.companyList && props.companyList.length > 0 ? (
          props.companyList.map((company) => (
            <li
              className="searchResult_list"
              onClick={() => {
                handleOnClick(company);
              }}
              key={company._id}
            >
              <span className="company_name">
                <strong>{company.Name.substring(0, props.queryLen)}</strong>
                {company.Name.substring(props.queryLen)}
              </span>
              <span className="dot green"></span>
              <span className="dot blue"></span>
              <span className="dot orange"></span>
              <span className="dot pink"></span>
              <br />
              <span> {company.Website} </span>
            </li>
          ))
        ) : (
          <li>Ops! No data found</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    handleError: state.search.handleError,
    search: state.search.search,
    companyList: state.search.companiesData,
    queryLen: state.search.queryLen,
    isSearched: state.search.isSearched,
    isSearching: state.search.isSearching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleResultClick: (companyDetails) =>
      dispatch(actions.handleResultClick(companyDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
