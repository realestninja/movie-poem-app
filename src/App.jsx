import { useState } from "react";
import './App.css'
import Search from './components/Search'
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResults, setSearchResults]  = useState([]);
  return (
    <>
      <h1>Create a movie poem</h1>
      <Search setSearchResults={setSearchResults} />
      <SearchResults items={searchResults} />
    </>
  )
}

export default App
