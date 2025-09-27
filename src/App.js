import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n";
import Home from "./routes/Home";
import Menus from "./routes/Menus";
import Events from "./routes/Events";
import FindUs from "./routes/FindUs";
import Drinks from "./routes/Drinks";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/events" element={<Events />} />
        <Route path="/find-us" element={<FindUs />} />
      </Routes>
    </div>
  );
}

export default App;
