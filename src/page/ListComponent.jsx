import { Link } from 'react-router-dom';
import { Theme } from '../context/Theme';
import { useContext } from 'react';

export default function ListComponent({anime}){
    const a = "/detail/" + anime.id
    let theme = useContext(Theme);
    return(
        <div className="listComponent" style={theme.box}>
            <img className="image" src={anime.coverImage.medium} alt="" />
            <div>
                <h2>{anime.title.english}</h2>
                <Link to= {a}><button className="button">View</button></Link>
            </div>
            <br />
        </div>
    )
}