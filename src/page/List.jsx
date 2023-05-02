import { useQuery } from "@apollo/client"
import { GET_ANIME_LIST } from "../query/GetAnimeList"
import ListComponent from "./ListComponent"
import { useContext } from "react"
import { Theme } from "../context/Theme"

export default function List(){
    let theme = useContext(Theme)
    const {loading, error, data}= useQuery(GET_ANIME_LIST, {
        variables:{
            count: 50
        }})
    if(loading) return <h1>Loading...</h1>
    else if(error) return <h1>Error: {error.message}</h1>
    else {
        return (
            <div>
                <h1 className='title' style={theme.title}>Top 50 Anime</h1>
                {data.Page.media.map((anime, index)=>{
                    return <ListComponent anime = {anime}/>
                })}
            </div>
        )
    }
}