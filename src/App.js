import './App.css';
import BannerImage from "./images/Banner-Image.png";
import AirbnbLogo from "./images/Airbnb_Logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import user from "./images/user.png";

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
                <img className='logo' width="102" height="32" src={AirbnbLogo} alt="airbnb log and icon"></img>
                <div className='search-bar'>
                  <div className='search-buttons'>
                    <div className='anywhere'>Anywhere</div>
                    <div className='any-week'>Any week</div>
                    <div className='add-guests'>Add Guests</div>
                    <div className='button'>
                      <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    </div>
                  </div>
                </div>
                <div className='menu-bar'>
                  <div className='airbnb-your-home'>
                    <p className='text'>Airbnb your home</p>
                    <div className='world-icon'>
                      <img width="16" height="16" src="https://img.icons8.com/ios-glyphs/30/000000/globe-earth--v1.png" alt="line icon of earth globe"></img>
                    </div>
                  </div>
                  <div className='menu'>
                    <div>
                      <FontAwesomeIcon className='menu-icon' icon={faBars} />
                    </div>
                    <div>
                      <img className='user-icon' width="30" height="30" src={user} alt="user profile icon"></img>
                    </div>
                  </div>
                </div>
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
