import './App.css';
import Banner from './layout/Banner'
import NavBar from './layout/Navbar'
import Row from './components/Row'
import Poster from './components/Poster'

function App() {
  return (
    <div className="App">
        {/* Navigation Bar */}
        <NavBar />
      
        {/* Banner */}
        <Banner />
        <Row title= "Popular Now" />
        <Poster />
        
        {/* Category Rows */}
        {/* <Row title="Trending Now" url={api.getNetflixOriginals} /> */}
        
        {/* Footer */}
    </div>
  );
}

export default App;
