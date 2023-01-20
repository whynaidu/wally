import "./App.css";
import Gallery from "./components/desktopGallery";
import ImageView from "./components/imageView";
import MobileGallery from "./components/mobileGallery";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MobileView from "./components/mobileView"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route exact path="/mobile" element={<MobileGallery />} />
        <Route path="/view/:wallpaper_url" element={<ImageView />} />
        <Route path="/mobileview/:wallpaper_url" element={<MobileView />} />
        <Route path="*" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
