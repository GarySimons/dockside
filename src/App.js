import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n";
import Home from "./routes/Home";
import Menus from "./routes/Menus";
import Events from "./routes/Events";
import WhatsOn from "./routes/WhatsOn";
import Contact from "./routes/Contact";
import FindUs from "./routes/FindUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
