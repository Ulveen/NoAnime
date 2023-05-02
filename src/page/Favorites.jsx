import ListComponent from "./ListComponent"

export default function Favorites(){
    const list = JSON.parse(localStorage.getItem("anime"))
    if(list.length===0){
        return <h1>List is Empty</h1>
    }
    else{
        return(
            <>
            <h1 className='white'>Favorites</h1>
            {list.map((anime, index) => {
                return <ListComponent anime = {anime}/>
            })}
            </>
        )
    }
}