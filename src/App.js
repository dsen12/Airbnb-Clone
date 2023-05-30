import './App.css';
import BannerImage from "./images/Banner-Image.png"

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
            <nav><div className='section-padding'>nav bar</div></nav>
            <div><div className='section-padding'>category scroll</div></div>
        </header>
        <main><div className='section-padding'>destination listings</div></main>
        <footer><div className='section-padding'>boring stuff</div></footer>
      </div>
    </div>
  );
}

export default App;
