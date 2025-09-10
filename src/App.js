
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Carousel/>
     
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
