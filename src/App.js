import "./App.css";
import Main from "./components/Main";

//importing components for individual project pages
import FoodAdventure from "./components/ProjectLinks/FoodAdventure";
import IChooseYou from "./components/ProjectLinks/IChooseYou";
import ResumeCreator from "./components/ProjectLinks/ResumeCreator";
import WeatherDashboard from "./components/ProjectLinks/WeatherDashboard";
import TypeIndex from "./components/ProjectLinks/TypeIndex";
import TechBlog from "./components/ProjectLinks/TechBlog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Color Palette: https://colorkit.co/palette/809bce-95b8d1-b8e0d4-d6eadf-eac4d5/

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Main /> */}
        {/* // ROUTES */}
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/food-adventure" element={<FoodAdventure />} />
          <Route path="/i-choose-you" element={<IChooseYou />} />
          <Route path="/resume-creator" element={<ResumeCreator />} />
          <Route path="/weather-dashboard" element={<WeatherDashboard />} />
          <Route path="/pokemon-type" element={<TypeIndex />} />
          <Route path="/tech-blog" element={<TechBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// {/* // ROUTES */}
// <Routes>
// <Route path="/food-adventure" element={<FoodAdventure />} />
// <Route path="/i-choose-you" element={<IChooseYou />} />
// <Route path="/resume-creator" element={<ResumeCreator />} />
// <Route path="/weather-dashboard" element={<WeatherDashboard />} />
// <Route path="/shop-shop" element={<ShopShop />} />
// <Route path="/tech-blog" element={<TechBlog />} />
// </Routes>
