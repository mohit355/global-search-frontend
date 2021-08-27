import React from "react";
import "./SearchResult.css";

const SearchResult = ({
  companyList = [],
  queryLen = 0,
  setSearch,
  setCompany,
}) => {
  const handleOnClick = (comp_details) => {
    console.log("clicked ", comp_details);
    setSearch("");
    setCompany([comp_details]);
  };

  return (
    <div className="searchResult">
      <ul>
        {companyList && companyList.length > 0 ? (
          companyList.map((company) => (
            <li
              className="searchResult_list"
              onClick={() => {
                handleOnClick(company);
              }}
              key={company._id}
            >
              <span className="company_name">
                <strong>{company.Name.substring(0, queryLen)}</strong>
                {company.Name.substring(queryLen)}
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
          <li>No data found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchResult;
