import { Link } from 'react-router-dom';
import { THEME, Theme } from '../context/Theme';
import { useContext, useState } from 'react';
export default function Home(){
    let theme = useContext(Theme)
    return(
        <div className="homePage" style={theme}>
            <h1 className="title" style={theme.title}>NoAnime</h1>
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