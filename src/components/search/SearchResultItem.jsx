import PropTypes from "prop-types";
import noop from "lodash/noop";

import "./styles/searchResultItem.css";

const SearchResultItem = ({
  title,
  image,
  imdbId,
  year,
  type,
  clickHandler,
}) => (
  <div
    className="search-result-item"
    onClick={() => clickHandler(imdbId)}
  >
    <h2>{title} {year && `(${year})`}</h2>
    <h3>{type}</h3>
    <img src={image} alt={title} />
  </div>
);

SearchResultItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imdbId: PropTypes.string,
  year: PropTypes.string,
  type: PropTypes.string,
  clickHandler: PropTypes.func,
};

SearchResultItem.defaultProps = {
  title: null,
  image: null,
  imdbId: null,
  year: null,
  type: null,
  clickHandler: noop,
};

export default SearchResultItem;
