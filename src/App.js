import './index.css';
import Banner from './layout/Banner'
import NavBar from './layout/Navbar'
import Row from './components/Row'
import api from './api'


function App() {
  return (
    <div className="App">
        {/* Navigation Bar */}
        <NavBar />
      
        {/* Banner */}
        <Banner />
        
        {/* Category Rows */}
        <Row title="Netflix Originals" url={api.getNetflixOriginals} isPoster/>
        <Row title="New Releases" url={api.getNetflixLatest} />
        <Row title="Trending Now" url={api.getTrending} />
        <Row title="Action" url={api.getActionMovies} />
        <Row title="Comedy" url={api.getComedyMovies} />
        <Row title="Romance" url={api.getRomanceMovies} />
        <Row title="Horror" url={api.getHorrorMovies} />
        {/* <Row title="Documentaries" url={api.getDocumentaries} /> */}

        {/* Footer */}
    </div>
  );
}

export default App;
