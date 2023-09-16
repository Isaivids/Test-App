import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./test/Navbar";
import Intro from "./test/Intro";
import Contact from "./test/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
