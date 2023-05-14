import PropTypes from "prop-types";
import noop from "lodash/noop";

import "./styles/searchResultItem.css";

const SearchResultItem = ({
  title,
  image,
  imdbID,
  year,
  type,
  clickHandler,
}) => (
  <div
    className="search-result-item"
    onClick={() => clickHandler({ title, imdbID })}
  >
    <h2>{title} {year && `(${year})`}</h2>
    <h3>{type}</h3>
    <img src={image} alt={title} />
  </div>
);

SearchResultItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imdbID: PropTypes.string,
  year: PropTypes.string,
  type: PropTypes.string,
  clickHandler: PropTypes.func,
};

SearchResultItem.defaultProps = {
  title: null,
  image: null,
  imdbID: null,
  year: null,
  type: null,
  clickHandler: noop,
};

export default SearchResultItem;
