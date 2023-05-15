import { useEffect, useState } from "react";

import './App.css'
import LoadingBar from "./components/loading-bar/LoadingBar";
import PoemDisplay from "./components/poem-display/PoemDisplay";
import Search from './components/search/Search'
import SearchResults from "./components/search/SearchResults";
import { fetchPoemFromApi } from "./helper/poemApiHelper";

function App() {
  const [searchResults, setSearchResults]  = useState([]);
  const [itemChoiceByUser, setItemChoiceByUser]  = useState(null);
  const [generatedPoem, setGeneratedPoem] = useState("");
  const poemGenerationAbortController = new AbortController();
  const { signal } = poemGenerationAbortController;

  useEffect(() => {
    console.log("itemChoiceByUser:", itemChoiceByUser);

    if(itemChoiceByUser && !generatedPoem.length) {
      fetchPoemFromApi({
        payload: { imdbId: itemChoiceByUser },
        setter: setGeneratedPoem,
        signal,
      });
    }
  }, [itemChoiceByUser, signal, generatedPoem]);

  useEffect(() => {
    console.log("generatedPoem:", generatedPoem);
  }, [generatedPoem])

  const resetApp = () => {
    setSearchResults([]);
    setItemChoiceByUser(null);
    setGeneratedPoem("");
    poemGenerationAbortController.abort();
  }

  return (
    <>
      <h1 onClick={resetApp}>movie poem app</h1>
      {!itemChoiceByUser && (
        <>
          <Search setSearchResults={setSearchResults} />
          <SearchResults
            items={searchResults}
            pickItem={setItemChoiceByUser}
          />
        </>
      )}
      {itemChoiceByUser && generatedPoem.length === 0 && <LoadingBar />}
      {generatedPoem.length > 0 && <PoemDisplay content={generatedPoem} />}
      {itemChoiceByUser && <button onClick={resetApp} className="reset-button">Reset</button>}
    </>
  )
}

export default App
