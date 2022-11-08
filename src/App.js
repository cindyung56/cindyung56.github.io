import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home id="home"/>
    </div>
  );
}

export default App;
