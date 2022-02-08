import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/CarouselAnimation.scss";
import "./components/pureJS";
import TopNav from './components/TopNav';
import AboutUs from './components/AboutUs'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import BrandNav from './components/BrandNav';
function App() {
  return (
    <div className='AppContainer'>
      <TopNav />
      <BrandNav />
      <Carousel />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
