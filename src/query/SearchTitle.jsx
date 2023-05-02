import { gql } from "@apollo/client";

export const SEARCH_TITLE = gql`
query ($title: String) {
    Page {
      media(search: $title, type:ANIME, isAdult:false) {
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