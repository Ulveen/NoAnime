import { gql } from "@apollo/client";

export const SEARCH_ANIME = gql`
query SearchAnime($id: Int) {
    Media(id: $id, isAdult:false) {
      id
      title {
        english
      }
      episodes
      genres
      coverImage {
        medium
      }
    }
}`;