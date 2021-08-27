import React, { useState } from "react";
import { listBySearch } from "../../apiCalls";
import SearchResult from "../searchResult/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = ({ setCompany }) => {
  const [handleError, setHandleError] = useState(false);
  const [search, setSearch] = useState("");
  const [companyData, setCompanyData] = useState([]);

  const getCompanyData = (search) => {
    if (search) {
      listBySearch({ search: search }).then((response) => {
        if (response.error) {
          handleError(response.error);
          setHandleError(true);
        } else {
          setCompanyData(response);
        }
      });
    }
  };

  const handleInputChange = (event) => {
    let search = event.target.value;
    getCompanyData(search);
    setSearch(search);
  };

  return (
    <div className="search">
      <div className="search_bar">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input
          type="text"
          name="searchBar"
          value={search}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search by company name.."
        />
      </div>
      <div className="search-dropdown">
        {search && search.length > 0 && (
          <SearchResult
            setCompany={setCompany}
            companyList={companyData}
            queryLen={search.length}
            setSearch={setSearch}
          ></SearchResult>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
