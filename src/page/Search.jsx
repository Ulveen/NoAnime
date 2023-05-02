import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_TITLE } from "../query/SearchTitle";
import ListComponent from "./ListComponent";

function ShowSearch({ title }) {
  const { loading, error, data } = useQuery(SEARCH_TITLE, {
    variables: {
      title: title,
    },
  });

  if (loading) return <h1>Loading...</h1>;
  else if (error) return <h1>Error: {error.message}</h1>;

  const filteredAnime = data.Page.media.filter(
    (anime) =>
      anime.title.english !== null &&
      anime.title.english.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <>
      {filteredAnime.map((anime, index) => (
        <ListComponent key={index} anime={anime} />
      ))}
    </>
  );
}

export default function Search() {
  const [title, setTitle] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="searchPage">
      <h1 className='white'>Search</h1>
      <div className="search">
        <form onSubmit={handleSearch}>
        <input type="text" value={title} onChange={(e) => {
          setTitle(e.target.value);
          setSearched(false);
        }} placeholder="Anime Title" />
          <button type="submit">Search Anime</button>
        </form>
      </div>
      {searched && <ShowSearch title={title} />}
    </div>
  );
}