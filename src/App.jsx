import { useEffect, useState } from "react";

import './App.css'
import Search from './components/search/Search'
import SearchResults from "./components/search/SearchResults";
import { fetchPoemFromApi } from "./helper/poemApiHelper";

function App() {
  const [searchResults, setSearchResults]  = useState([]);
  const [itemChoiceByUser, setItemChoiceByUser]  = useState(null);
  const [generatedPoem, setGeneratedPoem] = useState({});

  useEffect(() => {
    console.log("itemChoiceByUser:", itemChoiceByUser);

    if(itemChoiceByUser) {
      fetchPoemFromApi({
        payload: { imdbId: itemChoiceByUser },
        setter: setGeneratedPoem,
      });
    }
  }, [itemChoiceByUser]);

  useEffect(() => {
    console.log("generatedPoem:", generatedPoem);
  }, [generatedPoem])

  return (
    <>
      <h1>movie poem app</h1>
      {!itemChoiceByUser && (
        <>
          <Search setSearchResults={setSearchResults} />
          <SearchResults
            items={searchResults}
            pickItem={setItemChoiceByUser}
          />
        </>
      )}
    </>
  )
}

export default App
