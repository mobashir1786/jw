import './App.css';
import Banner from './components/Banner';
import Batting from './components/Batting';
import Description from './components/Description';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Register from './components/Register';
import Signature from './components/Signature';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Description />
      <Signature />
      <Batting />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
