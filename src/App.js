import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

// https://colorkit.co/palette/809bce-95b8d1-b8e0d4-d6eadf-eac4d5/

function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <div className="main-body">
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

