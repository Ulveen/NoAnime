import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <div className="homePage">
            <h1 className='white'>NoAnime</h1>
            <div className="home">
                <Link to="/search"><button className='button2'>Search</button></Link>
                <br />
                <Link to="/list"><button className='button2'>Recommendation</button></Link>
                <br />
                <Link to="/favorites"><button className='button2'>Favorites</button></Link>
            </div>
        </div>
    )
}