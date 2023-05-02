import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
query GetAnimeList($perpage: Int) {
  Page(perPage: $perpage) {
    media(type: ANIME, sort: POPULARITY_DESC, isAdult:false) {
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
  }
}`;