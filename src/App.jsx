import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import LocationCard from "./components/LocationCard";
import ResidentCard from "./components/ResidentCard";
import Pagination from "./components/Pagination";

function App() {
  const randomId = Math.floor(Math.random() * 126) + 1;
  const [location, getLocation, isLoading, hasError] = useFetch();
  const [inputValue, setInputValue] = useState(randomId);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    getLocation(url);
  }, [inputValue]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = "";
  };

  const quantity = 3,
    total = Math.ceil(location?.residents.length / quantity);
  const pagination = () => {
    const end = quantity * page,
      start = end - quantity,
      card = location?.residents.slice(start, end);
    return [card];
  };
  console.log(total);

  return (
    <>
      <div className="app">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {/* <h1 className="app_title">Rick and Morty</h1> */}
            <form className="app_form" onSubmit={handleSubmit}>
              <input className="app_form_input" ref={textInput} type="text" />
              <button className="app_form_btn">Search</button>
            </form>
            {hasError || !+inputValue ? (
              <h2>✖️Hey! you must provide an id 1 to 126</h2>
            ) : (
              <>
                <LocationCard location={location} />

                <div className="app_container">
                  {pagination()[0]?.map((character) => (
                    <ResidentCard key={character} location={character} />
                  ))}
                </div>
                <Pagination setPage={setPage} page={page} total={total} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
