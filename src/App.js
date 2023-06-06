import './App.css';
import CategoryBar from './CategoryBar';
import Footer from './Footer';
import Listings from './Listings';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Banner />
        <header className='sticky-top'>
            <Navbar />
            <CategoryBar />
        </header>
        <main className='section-padding'>
          <Listings />
          <br />
        </main>
        <footer className='section-padding sticky-bottom'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
