import './App.css';

import NavBar from './layout/Navbar'

function Banner() {
    return (
        <div className="banner">
            <div className="text-title">
            <h2> Insert Text Here or Perish! </h2>
          <p className= "message"> Watch Season 4 Now! </p>
            <p className ="episode-title"></p>
            <p className="synopsis"> The anticipated TV Drama 'Insert Text Here or Perish!' comes back with a brand new season! 
            Buckle up because this season will bring you more than ever before! Action packed with love, drama, mystery, and murder!
            Watch your favorites become entangled in this year's most talked about real-life drama series! </p>
            <button className="watch-button"> Watch </button>
            <button className="play-button"> Button </button>
            </div>
            </div>
            
    )
}

function App() {
  return (
    <div className="App">
        {/* Navigation Bar */}
        <NavBar />
      
        {/* Banner */}
        <Banner />
        
        {/* Category Rows */}
        {/* Footer */}
    </div>
  );
}

export default App;
