import PropTypes from "prop-types";
import noop from "lodash/noop";

const SearchResultItem = ({
  title,
  image,
  imdbID,
  year,
  // type,
  clickHandler,
}) => (
  <div onClick={() => clickHandler({ title, imdbID })}>
    <h2>{title} {year && `(${year})`}</h2>
    <img src={image} alt={title} />
  </div>
);

SearchResultItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imdbID: PropTypes.string,
  year: PropTypes.string,
  clickHandler: PropTypes.func,
};

SearchResultItem.defaultProps = {
  title: null,
  image: null,
  imdbID: null,
  year: null,
  clickHandler: noop,
};

export default SearchResultItem;
