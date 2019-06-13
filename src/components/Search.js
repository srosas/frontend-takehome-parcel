import React from "react";
import '../styles/Search.css';

const Search = (props) => {
  const { searchQuery, handleChange, searchGem, placeholder } = props;

  return (
    <form className="search" onSubmit={searchGem}>
      <input className="search-field" type="search" value={searchQuery} onChange={handleChange} placeholder={placeholder} />
      <button>Submit</button>
    </form>
  );
}
export default Search;