import { useEffect, useState } from "react";

import './App.css'
import LoadingBar from "./components/loading-bar/LoadingBar";
import PoemDisplay from "./components/poem-display/PoemDisplay";
import UserSettings from "./components/user-settings/UserSettings";
import Search from './components/search/Search'
import SearchInProgress from './components/search/SearchInProgress'
import SearchResults from "./components/search/SearchResults";
import { fetchPoemFromApi } from "./helper/poemApiHelper";

function App() {
  const [userSettings, setUserSettings] = useState({})
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults]  = useState([]);
  const [itemChoiceByUser, setItemChoiceByUser]  = useState(null);
  const [generatedPoem, setGeneratedPoem] = useState("");

  const poemGenerationAbortController = new AbortController();
  const { signal } = poemGenerationAbortController;

  useEffect(() => {
    if(itemChoiceByUser && !generatedPoem.length) {
      const payload = {
        imdbId: itemChoiceByUser,
        ...userSettings,
      }
      console.log("payload:", payload);

      fetchPoemFromApi({
        payload,
        setter: setGeneratedPoem,
        signal,
      });
    }
  }, [itemChoiceByUser, signal, generatedPoem, userSettings]);

  useEffect(() => {
    console.log("generatedPoem:", generatedPoem);
  }, [generatedPoem])

  const resetApp = () => {
    setItemChoiceByUser(null);
    setGeneratedPoem("");
    poemGenerationAbortController.abort();
  }

  return (
    <>
      <h1 onClick={resetApp}>movie poem app</h1>
      {!itemChoiceByUser && (
        <div className="user-interaction-area">
          <UserSettings
            setter={setUserSettings}
            userSettings={userSettings}
          />
          <Search
            setSearchResults={setSearchResults}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <SearchResults
            items={searchResults}
            pickItem={setItemChoiceByUser}
          />
        </div>
      )}
      {itemChoiceByUser && generatedPoem.length === 0 && <LoadingBar />}
      {generatedPoem.length > 0 && <PoemDisplay content={generatedPoem} />}
      {itemChoiceByUser && <button onClick={resetApp} className="reset-button">Reset</button>}
      {searchTerm && !searchResults.length > 0 && <SearchInProgress />}
    </>
  )
}

export default App
