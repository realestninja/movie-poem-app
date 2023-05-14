import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

import searchApiCall from "../../helper/titleIdMatchingHelper";

const Search = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div>
      <input
        value={searchTerm}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pick a movie or series"
      />
    </div>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
