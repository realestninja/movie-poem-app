import PropTypes from 'prop-types';
import noop from "lodash/noop";

import SearchResultItem from './SearchResultItem';
import "./styles/searchResults.css";

const SearchResults = ({ items, pickItem }) => (
  <div className="search-results-wrapper">
    {items.length > 0 && items.map((item) => {
      const { Title, Poster, imdbID, Year, Type } = item;
      return (
        <SearchResultItem
          title={Title}
          image={Poster}
          imdbID={imdbID}
          key={Poster}
          year={Year}
          type={Type}
          clickHandler={pickItem}
        />
      );
    })}
  </div>
);

SearchResults.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string,
    Poster: PropTypes.string,
  })),
  pickItem: PropTypes.func,
};

SearchResults.defaultProps = {
  items: [],
  pickItem: noop,
};

export default SearchResults;
