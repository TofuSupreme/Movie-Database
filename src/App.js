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
        <Row url={api.getNetflixOriginals} />
        {/* Footer */}
    </div>
  );
}

export default App;
