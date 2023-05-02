import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Detail from './page/Detail';
import Favorites from './page/Favorites';
import List from './page/List';
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Search from './page/Search';
import { THEME, Theme } from './context/Theme';
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});


function App() {
  let [theme, setTheme] = useState(THEME.dark);
  function changeTheme(){
    console.log("a");
    if(theme.mode === "Dark"){
      setTheme(THEME.light)
    }
    else{
      setTheme(THEME.dark)
    }
  }
  return (
    <ApolloProvider client={client} className="App">
      <Theme.Provider value={theme}>
        <Router basename="/">
          <button className= "modeButton" onClick={changeTheme}>{theme.mode}</button>
          <div className="content" style={theme}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/detail/:id" element={<Detail />} />
              <Route exact path="/list" element={<List />} />
              <Route exact path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
          <Link className="navbar" to="/"><button className='button'>Home</button></Link>
        </Router>
      </Theme.Provider>
    </ApolloProvider>
  );
}

export default App;