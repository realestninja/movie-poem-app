import { useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

import { ReactComponent as CloseButtonIcon } from "../../assets/x-circle.svg"
import "./styles/search.css";

import searchApiCall from "../../helper/titleIdMatchingHelper";

const Search = ({ setSearchResults, setSearchTerm, searchTerm }) => {
  const inputRef = useRef(null);

  const debouncedSearch = useMemo(
    () => debounce(() => {
      searchApiCall({ string: searchTerm, setter: setSearchResults });
    }, 300),
    [searchTerm, setSearchResults]
  );

  useEffect(() => {
    if (searchTerm.length > 0) {
      debouncedSearch(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, debouncedSearch, setSearchResults]);

  const resetSearchTerm = () => {
    inputRef.current.focus();
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="search-area">
      <input
        value={searchTerm}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pick a movie or series"
        autoFocus
        ref={inputRef}
      />
      <button className="reset-search-term-button" onClick={resetSearchTerm}>
        <CloseButtonIcon />
      </button>
    </div>
  );
};
// ad loading spinner

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

Search.defaultProps = {
  searchTerm: "",
};

export default Search;
