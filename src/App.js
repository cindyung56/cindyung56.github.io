import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Color Palette: https://colorkit.co/palette/809bce-95b8d1-b8e0d4-d6eadf-eac4d5/

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="main-body">
        <Home />
        <About />
        <Projects />
        <div className="skills-section">
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-jquery-plain colored"></i>
          <i class="devicon-nodejs-plain-wordmark colored"></i>
          <i class="devicon-npm-original-wordmark colored"></i>
          <i class="devicon-express-original colored"></i>
          <i class="devicon-mysql-plain colored"></i>
          <i class="devicon-sequelize-plain colored"></i>
          <i class="devicon-mongodb-plain-wordmark colored"></i>
          <i class="devicon-graphql-plain colored"></i>
          <i class="devicon-python-plain colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-redux-original colored"></i>
          <i class="devicon-visualstudio-plain colored"></i>
          <i class="devicon-github-original colored"></i>
          <i class="devicon-heroku-original colored"></i>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
