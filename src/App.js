import "./App.css";
import Company from "./components/company/Company";
import SearchBar from "./components/searchBar/SearchBar";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <div className="title">
        <h1>Welcome to Global Search by OneShot.ai</h1>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="company-center">
        {props.company && props.company.length > 0 && !props.isSearching ? (
          <Company></Company>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    company: state.search.company,
    searchQuery: state.search.search,
    isSearching: state.search.isSearching,
  };
};

export default connect(mapStateToProps, null)(App);
