import { Link } from 'react-router-dom';

export default function ListComponent({anime}){
    const a = "/detail/" + anime.id
    return(
        <div className="listComponent">
            <img className="image" src={anime.coverImage.medium} alt="" />
            <div>
                <h2>{anime.title.english}</h2>
                <Link to= {a}><button className="button">View</button></Link>
            </div>
            <br />
        </div>
    )
}