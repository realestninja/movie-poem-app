import { useEffect, useState } from "react";
import './App.css'
import Search from './components/search/Search'
import SearchResults from "./components/search/SearchResults";

function App() {
  const [searchResults, setSearchResults]  = useState([]);
  const [itemChoiceByUser, setItemChoiceByUser]  = useState({});

  useEffect(() => {
    console.log("itemChoiceByUser:", itemChoiceByUser);
  })

  return (
    <>
      <h1>Create a movie poem</h1>
      <Search setSearchResults={setSearchResults} />
      <SearchResults
        items={searchResults}
        pickItem={setItemChoiceByUser}
      />
    </>
  )
}

export default App
