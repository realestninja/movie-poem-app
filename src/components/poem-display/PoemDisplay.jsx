import PropTypes from 'prop-types';

const PoemDisplay = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div>
      {lines.map((line, index) => (
        <p key={index}>{line.length > 0 ? line : <br />}</p>
      ))}
    </div>
  );
};

PoemDisplay.propTypes = {
  content: PropTypes.string,
};

PoemDisplay.defaultProps = {
  content: '',
};

export default PoemDisplay;
