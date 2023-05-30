import './App.css';
import BannerImage from "./images/Banner-Image.png";
import AirbnbLogo from "./images/Airbnb_Logo.svg"
import MagnifyingGlass from "./images/magnifying-glass-solid.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
            <div className='banner'>
              <h1>Introducing Airbnb Rooms and more</h1>
              <span> 
                <img src={BannerImage} alt='screenshot of video' height={30} width={53}></img>
                <div>Watch the Rooms film (US)</div>
                <div className='divider'></div>
                <div>Learn more</div>
              </span>
            </div>
            <div className='navbar section-padding'>
                  <img className='logo' src={AirbnbLogo} alt="airbnb log and icon"></img>
                  <div className='search-bar'>
                    <div className='search-buttons'>
                      <div className='anywhere'>Anywhere</div>
                      <div className='any-week'>Any week</div>
                      <div className='add-guests'>Add Guests</div>
                      <div className='button'><img src={MagnifyingGlass} alt='hi'></img></div>
                    </div>
                  </div>
                  <div>menu</div>
            </div>
            <div className='category-bar'><div className='section-padding'>category scroll</div></div>
        </header>
        <main><div className='section-padding'>destination listings</div></main>
        <footer><div className='section-padding'>boring stuff</div></footer>
      </div>
    </div>
  );
}

export default App;
