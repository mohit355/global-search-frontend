import "./App.css";
import Company from "./components/company/Company";
import SearchBar from "./components/searchBar/SearchBar";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="company-center">
        {props.company && props.company.length > 0 ? <Company></Company> : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    company: state.search.company,
    searchQuery: state.search.search,
  };
};

export default connect(mapStateToProps, null)(App);
