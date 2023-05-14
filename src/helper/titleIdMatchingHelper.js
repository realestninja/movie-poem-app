import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';

import { OMDB_API_KEY } from '../../config';

const getApiUrl = ({ string }) => `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${string.trim()}*`;

const filterResultsForMoviesAndSeries = items => (
  items.filter(item => item.Type === "movie" || item.Type === "series")
);

const fuzzyFindItemByString = async ({ string, setter }) => {
  if (string.length > 0) {
    const apiUrl = getApiUrl({ string });

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("data:", data);
        if ("Search" in data) {
          const items = data.Search.slice(0, 3);
          const filteredItems = filterResultsForMoviesAndSeries(items)
          setter(filteredItems);
        } else if (data.Response === "False") {
          setter([]);
        }
      });
  }
}

const debouncedFuzzyFindItemByString = debounce(fuzzyFindItemByString, 500);
export default debouncedFuzzyFindItemByString;

fuzzyFindItemByString.propTypes = {
  string: PropTypes.string,
  setter: PropTypes.func,
};

fuzzyFindItemByString.defaultProps = {
  string: "",
  setter: noop,
};
