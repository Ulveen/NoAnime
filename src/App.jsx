import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Detail from './page/Detail';
import Favorites from './page/Favorites';
import List from './page/List';
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Search from './page/Search';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} className="App">
      <Router basename="/">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
          <Link className="navbar" to="/"><button>Home</button></Link>
      </Router>
    </ApolloProvider>
  );
}

export default App;