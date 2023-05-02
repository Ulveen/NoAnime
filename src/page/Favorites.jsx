import { useContext } from "react"
import ListComponent from "./ListComponent"
import { Theme } from "../context/Theme"

export default function Favorites(){
    const list = JSON.parse(localStorage.getItem("anime"))
    let theme = useContext(Theme)
    if(list.length===0){
        return <h1>List is Empty</h1>
    }
    else{
        return(
            <div>
                <div className="fill" style={theme}></div>
                <h1 className='title' style={theme.title}>Favorites</h1>
                {list.map((anime, index) => {
                    return <ListComponent anime = {anime}/>
                })}
            </div>
        )
    }
}