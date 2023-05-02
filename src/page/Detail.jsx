import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SEARCH_ANIME } from "../query/SearchAnime";
import { Theme } from "../context/Theme";

function DetailContent({ anime }) {
  let theme = useContext(Theme)
  const [favorites, addFavorites] = useState(() => {return (localStorage.getItem("anime") === null) ? [] : JSON.parse(localStorage.getItem("anime"))});
  const [isFavorite, setFavorite] = useState(false);

  let b = ""
    for(let i = 0; i < anime.genres.length; i++){
        b += anime.genres[i]
        if(i !==anime.genres.length - 1){
            b += ", "
        }
    }

  let Add = (e) => {
    e.preventDefault();
    addFavorites([...favorites, { id: anime.id, title: {english : anime.title.english}, coverImage: {medium: anime.coverImage.medium}, episodes: anime.episodes, genres: anime.genres }]);
  };

  let remove = (e) => {
    e.preventDefault();
    const temp = [];
    favorites.forEach((fav) => {
      if (fav.id !== anime.id)
        temp.push(fav);
    });
    addFavorites(temp);
  };

  let check = () => {
    setFavorite(false);
    if(favorites.length > 0){
      favorites.forEach((fav) => {
        if (fav.id === anime.id) {
          setFavorite(true);
        }
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("anime", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    check();
  });

  return (
    <div>
      <div className="fill" style={theme}></div>
      <h1 className="title" style={theme.title}>Detail</h1>
      <div className="detail">
        <img className="image" src={anime.coverImage.medium} alt="" />
        <div>
          <h2>{anime.title.english}</h2>
          <p>Episodes: {anime.episodes}</p>
          <p>Genres: {b}</p>
          {isFavorite ? (
            <form onSubmit={remove}>
              <h3>Favorited</h3>
              <button className="button2">Remove</button>
            </form>
          ) : (
            <form onSubmit={Add}>
              <button className="button2"> Add to Favorite </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Detail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(SEARCH_ANIME, {
    variables: {
      id: parseInt(id),
    },
  });
  if (loading) return <h1>Loading...</h1>;
  else if (error) return <h1>Error: {error.message}</h1>;
  else return <DetailContent anime={data.Media} />;
}