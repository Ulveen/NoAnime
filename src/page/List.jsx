import { useQuery } from "@apollo/client"
import { GET_ANIME_LIST } from "../query/GetAnimeList"
import ListComponent from "./ListComponent"

export default function List(){
    const {loading, error, data}= useQuery(GET_ANIME_LIST, {
        variables:{
            count: 50
        }})
    if(loading) return <h1>Loading...</h1>
    else if(error) return <h1>Error: {error.message}</h1>
    else {
        return (
            <>
                <h1 className='white'>Top 50 Anime</h1>
                {data.Page.media.map((anime, index)=>{
                    return <ListComponent anime = {anime}/>
                })}
            </>
        )
    }
}