import './App.css';
import Nav from "./Components/Nav/Nav.js";
import Homepage from "./Components/Homepage/Homepage.js";
import RoutedPage from "./Components/RoutedPage/RoutedPage.js";
import HomeFooter from "./Components/Homepage/HomeFooter.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buy" element={<RoutedPage />} />
          <Route path="/sell" element={<RoutedPage />} />
          <Route path="/communities/*" element={<RoutedPage />} />
        </Routes>
        <HomeFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
