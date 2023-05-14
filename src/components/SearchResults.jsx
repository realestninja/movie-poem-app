import PropTypes from 'prop-types';

const SearchResults = ({ items }) => (
  <div>
    {items.length > 0 && items.map((item) => (
      <div key={item.Poster}>
        <h1>{item.Title}</h1>
        <img src={item.Poster} />
      </div>
    ))}
  </div>
);

SearchResults.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    Title: PropTypes.string,
    Poster: PropTypes.string,
  })),
};

export default SearchResults;
