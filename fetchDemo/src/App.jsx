import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./components/Pages/HomePage"
import City from "./components/Pages/CityPage"
import Country from "./components/Pages/CountryPage"
import Geo from "./components/Pages/GeoPage"
import Unknown from "./components/Pages/UnknownPage"



import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/City" element={<City />} />
          <Route path="/Country" element={<Country />} />
          <Route path="/Geo" element={<Geo />} />
        </Route>

        <Route path="*" element={<Unknown />} />
      </Routes>
    </div>
  );
}

export default App;
