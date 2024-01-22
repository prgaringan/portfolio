
import './App.css';
import Navbar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Footer from './components/Footer';



import './fonts/SFPRODISPLAYMEDIUM.OTF'
import './fonts/SF-Pro-Display-Light.otf'
import './fonts/BebasNeue-Regular.ttf'
import './fonts/SFProDisplayBold.ttf'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <MyWork/>
      <Footer/>
      
    </div>
  );
}

export default App;
