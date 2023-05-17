import PropTypes from "prop-types";
import noop from "lodash/noop";

import "./styles/userSettings.css";

function UserSettings({ setter, userSettings }) {
  const { poemStyle = "", poemLanguage = "en" } = userSettings;

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedSettings = { ...userSettings };
    updatedSettings[name] = value;
    setter(updatedSettings);
  };

  return (
    <div className="user-settings">
      <div>
        <label>Style</label>
        <select name="poemStyle" value={poemStyle} onChange={handleChange}>
          <option value="">Default</option>
          <option value="cheerful">Cheerful</option>
          <option value="gloomy">Gloomy</option>
        </select>
      </div>
      <div>
        <label>Language</label>
        <select name="poemLanguage" value={poemLanguage} onChange={handleChange}>
          <option value="english">English</option>
          <option value="serbian">Serbian</option>
          <option value="german">German</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
}

UserSettings.propTypes = {
  setter: PropTypes.func,
  userSettings: PropTypes.object
};

UserSettings.defaultProps = {
  setter: noop,
  userSettings: {}
};

export default UserSettings;
