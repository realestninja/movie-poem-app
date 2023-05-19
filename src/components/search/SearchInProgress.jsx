import "./styles/SearchInProgress.css";

const Loading = () => {
  return (
    <div className="loading">
      <p className="loading-text">Searching</p>
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};

export default Loading;
