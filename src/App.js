import { useState } from "react";
import "./App.css";
import Company from "./components/company/Company";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  const [company, setCompany] = useState([]);
  console.log("Compnay ", company.length);
  return (
    <div className="App">
      <div>
        <SearchBar setCompany={setCompany}></SearchBar>
      </div>
      <div className="company-center">
        {company && company.length > 0 && <Company company={company}></Company>}
      </div>
    </div>
  );
}

export default App;
